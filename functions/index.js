const functions = require("firebase-functions");
const express = require('express');
const nodemailer = require('nodemailer');
const markdown = require('nodemailer-markdown').markdown;
const fetch = require('node-fetch');
const upload = require('multer-firebase')();
// const cors = require('cors');

const app = express();

// app.use(cors({
//     origin: 'https://davishyper',
//     methods: ['GET', 'POST']
// }));

app.use(express.json());

// in case CORS gets bypassed
// app.use(async (req, res, next) => {
//     console.log(req.get('origin'));
//     if (req.get('origin') != 'https://oneloop-website.web.app' && req.get('origin') != 'http://localhost:5000') {
//         res.status(401).send('Not authorized.');
//         return;
//     }
//     next();
// });

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: functions.config().email.user,
        pass: functions.config().email.pass,
    }
});
transporter.use('compile', markdown());

app.post('/api/work-with-us', async (req, res) => {
    let response;
    try {
        response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${functions.config().recaptcha.secret}&response=${req.body.token}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        });
    } catch(err) {
        res.send({ message: "could not verify reCAPTCHA with Google; please try again in a few moments."});
        return;
    }
    const data = await response.json();
    console.log(req.body);

    const mailOptions = {
        from: `${req.body.name} [${req.body.email}] <${functions.config().email.user}>`,
        to: functions.config().email.receiver,
        subject: req.body.subject,
        text: `Use an HTML enabled client to view this email.`,
        replyTo: req.body.email
    };

    let message = req.body.message.split('\n');
    message = message.map(msg => `<p>${msg}</p>`);

    if (data.score <= 0.3) {
        res.status(406).send({ message: "reCAPTCHA could not be verified, score too low; if you are a human, try submitting again." });
        return;
    } else if (data.score <= 0.7) {
        mailOptions.html = [
            `<h3>Warning: Potential spam (user got low reCAPTCHA score)</h3>`,
            ...message
        ].join('\n');
    } else {
        mailOptions.html = [...message].join('\n')
    }

    try {
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                res.send({ message: "Couldn't send email; try again in a few moments." });
            }
            else {
                console.log('sent ' + info.response);
                res.send({ message: "Email sent!" });
            }
        });
    } catch (err) {
        console.log(err);
        res.send({ message: "Couldn't send email; try again in a few moments." });
    }
});

const fields = [
    { name: "resume", maxCount: 1 },
    { name: "cover_letter", maxCount: 1 }
];

app.post('/api/join-us', upload.fields(fields), async (req, res) => {
    console.log(req.body);
    console.log(req.files);

    let response;
    try {
        response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${functions.config().recaptcha.secret}&response=${req.body.token}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        });
    } catch(err) {
        res.send({ message: "could not verify reCAPTCHA with Google; please try again in a few moments."});
        return;
    }
    const data = await response.json();

    if (data.score <= 0.3) {
        res.status(406).send({ message: "reCAPTCHA could not be verified, score too low; if you are a human, try submitting again." });
        return;
    }

    if (!req.files.resume) {
        res.send({ message: "No resume file was sent; upload one before submitting." });
        return;
    }

    let attach = [
        {
            filename: `${req.body.name} Resume.pdf`,
            content: req.files.resume[0].buffer
        }
    ]

    if (req.files.cover_letter) {
        attach.push({
            filename: `${req.body.name} Cover Letter.pdf`,
            content: req.files.cover_letter[0].buffer
        })
    }

    let content = [
        `**Name**: ${req.body.name} \n`,
        `**Year**: ${req.body.year} \n`,
        `**Major**: ${req.body.major} \n `,
        `**Email**: ${req.body.email} \n`,
        `**GPA**: ${req.body.gpa} \n`,
        `**Hours to commit**: ${req.body.hours_to_commit} \n`
    ];
    if (data.score <= 0.7) {
        content.unshift(`## WARNING: user did not get a high reCAPTCHA score; the following could be spam\n`);
    };

    // Subteams they're interested in
    let subteams = [
        `**Subteams they're intereted in**:\n`
    ];
    if (Array.isArray(req.body.subteams_interested)) {
        for (const team of req.body.subteams_interested) {
            subteams.push(`* ${team}\n`);
        }
    } else {
        subteams.push(`* ${req.body.subteams_interested}\n`)
    }
    content = content.concat(subteams);

    let ranking = [
        `**Subteams ranking (if any)**: ${req.body.ranking}\n`
    ];
    content = content.concat(ranking);

    // Software they're familiar with
    let software = [
        `**Software they're familiar with**: \n`
    ];
    if (Array.isArray(req.body.software_familiar)) {
        for (const softwares of req.body.software_familiar) {
            software.push(`* ${softwares}\n`);
        }
    } else {
        subteams.push(`* ${req.body.software_familiar}\n`)
    }
    content = content.concat(software);

    // Programming languages they're familiar with
    let programming_languages = [
        `**Programming languages they're familiar with**:\n`
    ];
    if (Array.isArray(req.body.programming_languages_familiar)) {
        for (const languages of req.body.programming_languages_familiar) {
            programming_languages.push(`* ${languages}\n`)
        }
    } else {
        programming_languages.push(`* ${req.body.programming_languages_familiar}\n`)
    }
    content = content.concat(programming_languages);

    // References
    let references = [
        `**References**: \n`
    ];
    if (Array.isArray(req.body.reference)) {
        for (const reference of req.body.reference) {
            references.push(`* ${reference}\n`);
        }
    } else {
        references.push(`* ${req.body.reference}\n`);
    }
    content = content.concat(references);

    const mailOptions = {
        from: `${req.body.name} [${req.body.email}] <${functions.config().email.user}> `,
        to: functions.config().email.receiver,
        subject: `OneLoop Application: ${req.body.name} `,
        replyTo: req.body.email,
        markdown: content.join("\n"),
        attachments: attach
    };

    try {
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                res.send({ message: "Couldn't send application; try again in a few moments." });
            } else {
                console.log('Email sent: ' + info.response);
                res.send({ message: "Application sent!" });
            }
        });
    } catch (err) {
        console.log(err);
        res.send({ message: "Couldn't send application; try again in a few moments." });
    }
});

exports.app = functions.https.onRequest(app);
