import { expect } from 'chai';
import { createLocalVue, mount } from '@vue/test-utils';
import Router from 'vue-router';
import Navigation from '@/components/Navigation.vue';

const localVue = createLocalVue();

localVue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/test',
      name: 'Test',
    },
    {
      path: '*',
      redirect: '/test',
    },
  ],
});

describe('Navigation.vue', () => {
  it('renders props.app has not values when passed', () => {
    const wrapper = mount(Navigation, { localVue, router });
    expect(wrapper.props().app).to.equal(false);
  });

  it('renders props.app has values when passed', () => {
    const wrapper = mount(Navigation, {
      localVue,
      router,
      propsData: { app: true },
    });
    expect(wrapper.props().app).to.equal(true);
  });
});
