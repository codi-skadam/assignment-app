import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import {SnackBarComponent} from '../app/snack-bar/snack-bar.component';



export default {
  title: 'Example/Snackbar',
  component:SnackBarComponent ,
  decorators: [
    moduleMetadata({
      declarations: [SnackBarComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<SnackBarComponent> = (args: SnackBarComponent) => ({
  component: SnackBarComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args={
  text:'This is snackbar',
  type:''
}

export const Success = Template.bind({});
Success.args={
  text:'This is snackbar',
  type:'success'
}

export const Danger = Template.bind({});
Danger.args={
  text:'This is snackbar',
  type:'danger'
}

