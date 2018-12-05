import { expect } from 'chai';
import { createLocalVue, mount } from '@vue/test-utils';
import Router from 'vue-router';
import Content from '@/components/Content.vue';

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

describe('Content.vue', () => {
  it('renders router-view when passed', () => {
    const wrapper = mount(Content, { localVue, router });
    expect(wrapper.vm.$route.name).to.equals('Test');
    wrapper.vm.$router.push('/anyOther');
    expect(wrapper.vm.$route.name).to.equals('Test');
  });
});
