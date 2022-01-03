# Making changes to your website

## How to make changes

### Where to find the files for each page

`src -> components` if you are searching for particular components such as the navigation bar, the footer, the content in between.
`src -> pages` if you are searching for the entire page.

### How to create new page/component

Format for creating new page/component.js. All you have to do is change `FunctionName`. **Make sure that the FunctionNames are ALWAYS capital. Do not change anything else unless absolutely required. Directories of the files you are calling may defer.**
````

import './FunctionName.css'; # for both component and page creation

import React, { useEffect } from 'react';
import YourComponent from '../../components/YourComponent'; for page creation
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';

const FunctionName = () =>{
	return(
		<React.Fragment>
			<div className=""></div> for component creation
			<Navbar /> # for page creation
			<YourComponent /> # for page creation
			<Footer /> # for page creation
		</React.Fragment>
	);
}

export default FunctionName;

````
#### Creating new page

To create new page, add a new file with a `.css` and `.js` extension to the pages folder. You may create a new folder and add the new files into that folder or add the new files to an existing folder or just add them to the pages folder. **As long as they are in `src -> pages`.** Refer to the above format to create the new page. 

Once you create the page, you can add a link to it in the `src->navbar->navbar.js`, and add the routing extension to the `App.js`.

##### How to add routing extension to App.js

For eg.

```
import Home from './pages/home/home';
import About from './pages/about/about';

function App() {

	useEffect(() => {
		Aos.init({ duration: 1200 });
	});

	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/joinus">
						<GoogleReCaptchaProvider reCaptchaKey="6LcdNwUbAAAAACp-eJx6PrXTshtyfexJWE9yP4rG">
							<Join />
						</GoogleReCaptchaProvider>
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
```

#### Creating new component

To create new component, add a new file with a `.css` and `.js` extension to the component folder. You may create a new folder and add the new files into that folder or add the new files to an existing folder or just add them to the component folder. **As long as they are in `src -> component`.** Refer to the above format to create the new component. 

### How to change images

Upload the image in this folder

`public -> images`

Go to the folder for the page you want to modify (Step 1) and open the file with suffix .js

Scroll to wherever you see the image that you want to change

Example:

Uploaded a new image called UpdatedLogo.png

Before: `<img src="images/OneLoopLogo.png"/>`

After: `<img src="images/UpdatedLogo.png"/>`

### How to add team members to roster

Upload the image in this folder depending on which year the member is joining in the same directory. 

`public -> images -> {prevyearcurryear} for eg. 2018-2019 = 20182019`

**Make sure that the images are square shaped, otherwise the picture will not come out right on the website**

In the file path `src -> components -> team`, there are `.js` files where you see can all the teams for the respective years. 

Follow instructions carefully:
	1. You will notice that `<div>` tags with `classNames`. These classNames will be in the format: `oneloop-team{year} {team} team-{mobile/web}`.
	2. The `<div>` tags ending with `team-mobile` will appear in the mobile version, and the `<div>` tags ending with `team-web` will appear in the web version.
	3. You will notive some `<div>` tags with `classNames`, `team-member`. Create a new div in the same format depending on whichever team and row you want to add the member **twice** - once in the `team-mobile <div>` and once in the `team-web <div>`.
	4. If all goes well, you should see member along with their name and position on the website after you push it to the repo. 


## How to test changes

Make sure to use Git Bash to run these commands (unless you're on Mac).

### Testing only the frontend (email functions won't work)

* `cd <path_to_directory>`
* `npm install`
* `npm start`
* website will open at `http://localhost:3000/`

### Testing both the frontend and backend together (emails will work)

* `cd <path_to_directory>`
* `npm install`
* `npm run build`
* `firebase functions:config:get > .runtimeconfig.json`
* `firebase serve`
* website is usually available at `http://localhost:5000/`

## When done testing
* CTRL + C to end the process
* terminal might prompt with `Terminate batch job? (Y/n)`
	* type `Y` and enter

## Deploying your changes
* `cd <path_to_directory>`
* `npm run build`
* `firebase deploy`
* Note: try to not deploy more than three times a day, as there are bandwidth restrictions on Firebase, and exceeding 1GB in a day will incur charges (a single deploy uses ~300MB bandwidth)

## Stuck?

Fill out our bug fix form if you're ever stuck on fixing your website: https://forms.gle/gz6dxTwCKDDhw5xw6
