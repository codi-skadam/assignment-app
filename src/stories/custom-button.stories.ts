import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import {CustomButtonComponent} from '../app/common-components/custom-button/custom-button.component';



export default {
  title: 'Example/Custom-Button',
  component:CustomButtonComponent ,
  decorators: [
    moduleMetadata({
      declarations: [CustomButtonComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<CustomButtonComponent> = (args: CustomButtonComponent) => ({
  component: CustomButtonComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args={
  text:'Default Button',
  type:'default',
  navigateTo:'/'
}

export const Link = Template.bind({});
Link.args={
  text:'Link Button',
  type:'link',
  navigateTo:'/'
}


export const Primary = Template.bind({});
Primary.args={
  text:'Primary Button',
  type:'primary',
  navigateTo:'/'
}

export const Danger = Template.bind({});
Danger.args={
  text:'Danger Button',
  type:'danger',
  navigateTo:'/'
}

