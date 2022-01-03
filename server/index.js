const express = require('express');
const app = express();
const port = 5000;
const path = require('path');

const nodemailer = require('nodemailer');
const markdown = require('nodemailer-markdown').markdown;
const fetch = require('node-fetch');
const multer = require('multer');
const upload = multer();

require('dotenv').config();

app.use(express.static(path.join(__dirname, "..", "build")));

app.use(express.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    } //npm install dotenv
});
transporter.use('compile', markdown());

app.post('/work-with-us', (req, res) => {
    fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.CAPTCHA_SECRET}&response=${req.body.token}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    }).then(response => response.json()).then(data => {
        const mailOptions = {
            from: `${req.body.name} [${req.body.email}] <zoomerinsight@gmail.com>`,
            to: process.env.EMAIL_USER,
            subject: req.body.subject,
            text: `Use an HTML enabled client to view this email.`,
            replyTo: req.body.email
        };

        if (data.score <= 0.3) {
            res.status(406).send({ message: "Captcha could not be verified, score too low" });
        } else if (data.score <= 0.7) {
            mailOptions.html = `<h3>Warning: Potential spam</h3><p>${req.body.message}</p>`;

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                    res.json(error);
                }
                else {
                    console.log('sent ' + info.response);
                    res.json("Successfully sent email to " + mailOptions.to);
                }
            });
        } else {
            mailOptions.html = `<p>${req.body.message}</p>`;

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                    res.json(error);
                }
                else {
                    console.log('sent ' + info.response);
                    res.json("Successfully sent email to " + mailOptions.to);
                }
            });
        }
    })
});

const fields = [
    { name: "resume", maxCount: 1 },
    { name: "cover_letter", maxCount: 1 }
];

app.post('/join-us', upload.fields(fields), (req, res) => {
    fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.CAPTCHA_SECRET}&response=${req.body.token}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    }).then(response => response.json()).then(data => {
        if (data.score <= 0.3) {
            res.status(406).send({ message: "Captcha could not be verified, score too low" });
        }
        console.log(req.body);
        try {
            if (!req.files.resume) {
                res.send({ message: 'No resume uploaded' });
            } else {
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

                // content = content.concat(req.body.ranking);

                console.log(content)

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
                    from: `${req.body.name} [${req.body.email}] < zoomerinsight@gmail.com> `,
                    to: 'zoomerinsight@gmail.com',
                    subject: `OneLoop Application: ${req.body.name} `,
                    replyTo: req.body.email,
                    markdown: content.join("\n"),
                    attachments: attach
                };

                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                        res.send("successfully sent email to " + mailOptions.to);
                    }
                });
            }
        } catch (err) {
            res.status(500).send(err);
        }
    });
});

app.post('/captcha', (req, res) => {
    console.log(req.body.code);

    fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.CAPTCHA_KEY}&response=${req.body.code}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    }).then(response => response.json()).then(data => {
        console.log(data);
    })

    res.send('ok');
});

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.listen(port, () => {
    console.log('Currently listening on port ' + port);
});
