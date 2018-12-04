import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Footer from '@/components/Footer.vue';
import { VIEWSAUTHOR } from '@/config';

describe('Footer.vue', () => {
  it('renders author text', () => {
    const wrapper = shallowMount(Footer);
    const footer = wrapper.findAll('.font-weight-thin.px-4');
    expect(footer.length).to.equal(1);
    expect(footer.at(0).text()).to.equal(VIEWSAUTHOR.ZONG);
  });

  it('renders props.app has not values', () => {
    const wrapper = shallowMount(Footer);
    expect(wrapper.props().app).to.equal(false);
  });

  it('renders props.app has values', () => {
    const wrapper = shallowMount(Footer, {
      propsData: { app: true },
    });
    expect(wrapper.props().app).to.equal(true);
  });
});
