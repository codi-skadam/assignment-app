import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import {QuoteDisplayComponentComponent} from '../app/quote-display-component/quote-display-component.component'


export default {
  title: 'Example/Quote Display Component',
  component: QuoteDisplayComponentComponent,
  decorators: [
    moduleMetadata({
      declarations: [QuoteDisplayComponentComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<QuoteDisplayComponentComponent> = (args: QuoteDisplayComponentComponent) => ({
  component: QuoteDisplayComponentComponent,
  props: args,
});

export const Card = Template.bind({});
