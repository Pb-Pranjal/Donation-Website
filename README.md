# Donation React App

A React donation platform for matching donors with individuals and NGOs in need.

## Overview

This project uses React, React Router, Axios, and styled-components to build a multi-page donation experience.

The app includes:
- Landing page with navigation and donation messaging
- Donor donation form
- Request submission form for individuals/NGOs
- Request list page showing current requests
- Payment gateway placeholder page
- Signup and signin pages for authentication
- Thank you confirmation page
- About / How It Works section

## Features

- Multi-page routing with `react-router-dom`
- Donation form submission to backend via `fetch`
- Request listing fetched with `axios`
- Signup and signin forms integrated with backend API
- LocalStorage usage for donor and requester data flow

## Routes

- `/` - Landing page
- `/getstarted` - Get started page
- `/aboutus` - About / How it works page
- `/contactus` - Contact page
- `/payment` - Payment gateway page
- `/requestform` - Request submission page
- `/requestlist` - Request list page
- `/donationform` - Donation submission page
- `/thanku` - Thank you page
- `/signup` - Signup page
- `/signin` - Signin page

## Backend Requirements


- `POST /signup` - create a user account
- `POST /signin` - authenticate a user
- `POST /requestedreg` - register a new donation request
- `POST /donatedreg` - register a donation submission
- `GET /fusionfest/requester` - get current request list



## Dependencies

- react
- react-dom
- react-router-dom
- axios
- styled-components
- typescript

## Notes

- The app is configured as a Create React App project.
- Some pages use inline styles instead of CSS modules.
- Local image assets are referenced from `public/` and external URLs.

## License

This project is provided as-is for personal or demo use.
