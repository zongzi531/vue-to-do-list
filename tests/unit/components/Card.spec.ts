import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Card from '@/components/Card.vue';
import { TODOTYPE } from '@/config';

describe('Card.vue', () => {
  it('renders props.item has not values when passed', () => {
    const wrapper = mount(Card);
    const haveClassGrey = wrapper.findAll('.grey--text');
    const haveEditBtn = wrapper.findAll({ name: 'v-btn' }).filter((w: any) => w.text() === 'edit');
    const doneBtnText = wrapper.findAll({ name: 'v-btn' }).at(2).text();
    expect(haveClassGrey.length).to.equal(0);
    expect(haveEditBtn.length).to.equal(1);
    expect(doneBtnText).to.equal('done');
    expect(wrapper.props().item.title).to.equal('');
    expect(wrapper.props().item.desc).to.equal('');
  });

  it('renders props.item has values when passed', () => {
    const item = {
      title: 'test',
      desc: 'desc',
      type: TODOTYPE.HAVEDO,
    };
    const wrapper = mount(Card, {
      propsData: { item },
    });
    const haveClassGrey = wrapper.findAll('.grey--text');
    const haveEditBtn = wrapper.findAll({ name: 'v-btn' }).filter((w: any) => w.text() === 'edit');
    const doneBtnText = wrapper.findAll({ name: 'v-btn' }).at(1).text();
    expect(haveClassGrey.length).to.equal(1);
    expect(haveEditBtn.length).to.equal(0);
    expect(doneBtnText).to.equal('return');
    expect(wrapper.props().item).to.equal(item);
  });

  it('renders delect button and check click event when passed', () => {
    const wrapper = mount(Card);
    const btn = wrapper.findAll({ name: 'v-btn' }).at(0);
    expect(btn.text()).to.equal('delete');
    btn.trigger('click');
    expect(wrapper.emitted().delete.length).to.equal(1);
  });

  it('renders edit button and check click event when passed', () => {
    const wrapper = mount(Card);
    const btn = wrapper.findAll({ name: 'v-btn' }).at(1);
    expect(btn.text()).to.equal('edit');
    btn.trigger('click');
    expect(wrapper.emitted().edit.length).to.equal(1);
  });

  it('check done/return button click event when passed', () => {
    const wrapper = mount(Card);
    const btn = wrapper.findAll({ name: 'v-btn' }).at(2);
    btn.trigger('click');
    expect(wrapper.emitted().done.length).to.equal(1);
  });
});
