import Vue from 'vue'
import Title from '@/Title'

describe('Title.vue', () => {
  const Constructor = Vue.extend(Title)
  const vm = new Constructor({
    propsData: {
      title: '{ To Do List }',
      author: 'by Zong'
    }
  }).$mount()

  it('title is { To Do List }', () => {
    expect(vm.title)
    .toEqual('{ To Do List }')
  })

  it('author is by Zong', () => {
    expect(vm.author)
    .toEqual('by Zong')
  })
})
