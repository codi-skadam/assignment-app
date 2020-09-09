import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import {LoginComponent} from '../app/login/login.component'


export default {
  title: 'Example/Login Component',
  component: LoginComponent,
  decorators: [
    moduleMetadata({
      declarations: [LoginComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<LoginComponent> = (args: LoginComponent) => ({
  component: LoginComponent,
  props: args,
});

export const Card = Template.bind({
  
});
