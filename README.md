# Warrior Path

Warrior Path is a fictional martial arts gym website developed as part of a front-end development project.

## Purpose

Warrior Path is a fictional martial arts school website designed to simulate a real-world front-end project. It provides information about martial arts classes, trainer profiles, and membership options. The goal is to create a clean, accessible, and responsive website that follows modern UX principles while showcasing practical HTML and CSS skills.

## Value to Users

The website helps users understand what the school offers, who the instructors are, and how to sign up. It also gives them an impression of the school's tone and style. Clear navigation and responsive design make it easy to use on any device.

## Key Features

- Responsive layout using Bootstrap 5  
- Fully functioning navigation bar with clear active states  
- Consistent styling and layout across all pages  
- Custom form elements for the "Join Us" page  
- HTML and CSS written to modern standards  
- Accessibility and usability considered in design decisions

## Pages Included

- Home (`index.html`)
- Classes (`classes.html`)
- Trainers (`trainers.html`)
- Join Us (`signup.html`)

## Deployment

The website is deployed using GitHub Pages and is accessible at:  
[https://louisce.github.io/warrior-path/](https://louisce.github.io/warrior-path/)

## Technologies Used

- HTML5
- CSS3
- Bootstrap 5 (via CDN)
- Git and GitHub for version control and deployment

## File Structure

warrior-path/
│
├── assets/
│ ├── css/
│ │ └── styles.css
│ └── images/
│ └── (image files)
│
├── index.html
├── classes.html
├── trainers.html
├── signup.html
└── README.md

## Screenshots

_Screenshots of each page and key feature will be included here._

## Screenshots

### Signup Page (Test Screenshot)

![Signup Page Screenshot](assets/images/test-screenshot.png)

## Attribution

- Bootstrap provided via official CDN: https://getbootstrap.com/

## Accessibility

This website supports keyboard navigation to enhance accessibility. Interactive elements such as navigation links and call-to-action (CTA) buttons have visible `:focus` styles, allowing users who navigate using the Tab key to clearly see which element is currently selected. The focus styles use a high-contrast orange (#ffa040) consistent with the hover styles for visual continuity. Additionally, form inputs and buttons highlight on focus to assist users relying on keyboard interaction.

### Accessibility Testing

**Keyboard Navigation Test:**  
Pressing the Tab key cycles through all interactive elements (links, buttons, form fields). Each focused element is clearly highlighted with a bright orange outline or underline. No elements are skipped, and focus order is logical.
**Result:** Pass

## How to Run/Preview the Project

You can preview the website locally by opening the HTML files directly in your web browser. No additional setup is required.

Alternatively, view the live site hosted on GitHub Pages at:  
[https://louisce.github.io/warrior-path/](https://louisce.github.io/warrior-path/)

## Bug & Testing Log

- Tested the website on Chrome, Firefox, and Edge on both desktop and mobile devices using device emulation.
- HTML and CSS files were validated using W3C and Jigsaw validators with zero errors.
- Keyboard navigation was tested, ensuring all interactive elements receive visible focus outlines with a high-contrast orange (#ffa040), consistent with hover states.
- All images include descriptive alt attributes for accessibility compliance.
- All external links open in new tabs with appropriate `rel` attributes to ensure security.
- Responsive design confirmed with CSS media queries working across multiple screen sizes.
- No critical bugs found.
- Minor issue: On very small screens (under 320px width), footer text slightly overlaps; this will be addressed in a future update.

## Features in Detail

### Home Page
- Eye-catching banner introduces the brand
- Clear navigation to other pages
- Welcoming call to action

### Classes Page
- Grid layout displaying available classes
- Descriptions help users choose the right program

### Trainers Page
- Profile cards for each instructor
- Bio and specialties provided for each trainer

### Join Us Page
- Sign-up form with name, email, class choice, and comments
- Designed for easy user interaction

## Target Audience

The primary audience includes:
- Beginners interested in martial arts classes
- Parents looking for safe, structured activities for children
- Experienced martial artists seeking new instructors or facilities

The design and layout reflect a balance of professionalism, accessibility, and approachability to cater to all of these groups.

## Design Decisions

- **Orange highlights**: Used for focus and hover states to guide user interaction.
- **Responsive design**: Ensures usability on phones, tablets, and desktops.
- **Bootstrap 5**: Chosen for its ease of use and mobile-first approach.
- **Image consistency**: All images follow a clean and modern visual style.
- **Alt attributes**: Support screen readers and visually impaired users.

## Future Improvements

- Fix footer overlap issue on very small screens (<320px)
- Add confirmation message after successful form submission
- Expand the site with a blog/news page
