# unauth-react-components

React components used among all unauth apps

# Components

### Buttons
  - [Button with Icon](https://5dc6b89d9e960b0008991680--unauth-react-components.netlify.com/?path=/story/button--button-icon) - Button component with right arrow icon on right side.  
  - [Button Primary](https://5dc6b89d9e960b0008991680--unauth-react-components.netlify.com/?path=/story/button--button-primary) - Primary button using primary color 
  - [Button External Link](https://5dc6b89d9e960b0008991680--unauth-react-components.netlify.com/?path=/story/button--external-link) - Button for external Links
  - [Button Home](https://5dc6b89d9e960b0008991680--unauth-react-components.netlify.com/?path=/story/button--home-button) - Home icon as button
  
### Card

- [Card](https://5dc6b89d9e960b0008991680--unauth-react-components.netlify.com/?path=/story/card--card) - Card container to hold any type of child element

### Icons (Svg)

- [Failed Icon](https://5dc6b89d9e960b0008991680--unauth-react-components.netlify.com/?path=/story/icon--failed-icon) - Failed Icon
- [Success Icon](https://5dc6b89d9e960b0008991680--unauth-react-components.netlify.com/?path=/story/icon--success-icon) - Success Icon
- [Arrow Right](https://5dc6b89d9e960b0008991680--unauth-react-components.netlify.com/?path=/story/icon--arrow-right-icon) - Arrow Right
- [Sensor](https://5dc6b89d9e960b0008991680--unauth-react-components.netlify.com/?path=/story/icon--sensor-icon) - Sensor icon

### Image

- [Image](https://5dc6b89d9e960b0008991680--unauth-react-components.netlify.com/?path=/story/image--image) - Simple image component

### Input

- [Input Text](https://5dc6b89d9e960b0008991680--unauth-react-components.netlify.com/?path=/story/inputtext--input-text) - Input text component
- [Input Text Disabled](https://5dc6b89d9e960b0008991680--unauth-react-components.netlify.com/?path=/story/inputtext--input-text-disabled) - Input text disabled component

### Logo

- [Logo](https://5dc6b89d9e960b0008991680--unauth-react-components.netlify.com/?path=/story/logo--logo) - Simple logo component

### Forms

- [One Field Form](https://5dc6b89d9e960b0008991680--unauth-react-components.netlify.com/?path=/story/onefieldform--field-form) - Form with single input field and button

### Loaders

- [Receive Loader](https://5dc6b89d9e960b0008991680--unauth-react-components.netlify.com/?path=/story/loaders--receive-loader) - Receiving loader component (Gif)
- [Send Loader](https://5dc6b89d9e960b0008991680--unauth-react-components.netlify.com/?path=/story/loaders--send-loader) - Sending loader component (Gif)

### Texts

- [Text](https://5dc6b89d9e960b0008991680--unauth-react-components.netlify.com/?path=/story/text--text) - Simple text component
- [Text Header](https://5dc6b89d9e960b0008991680--unauth-react-components.netlify.com/?path=/story/text--text-header) - Text component for heading
- [Text Primary](https://5dc6b89d9e960b0008991680--unauth-react-components.netlify.com/?path=/story/text--text-primary) - Primary text component 

# Installation

```
yarn add @unauthapp/react-components
```

# Usage

```
const { Text, TextPrimary, ButtonIcon } from '@unauthapp/react-components';

<Text>Sample</Text>
<TextPrimary>Primary Text</TextPrimary>
<ButtonIcon>Button Icon</ButtonIcon>
```

## Run storybook locallly

- Clone the repository
- Install dependencies
  ```
  yarn
  ```
- Start storybook
  ```
  yarn storybook
  ```

## Storybook Deployment

- This app is deployed on netlify.
- To configure the app on netlify use below command as deploy command in netlify
  ```
  yarn build-storybook
  ```
- Build directory
  ```
  storybook-static
  ```
  
# Contributors

Thank you to all the contributors who help in making this project better 🙌

<a href="https://github.com/arshadkazmi42"><img src="https://github.com/arshadkazmi42.png" width="30" /></a>
