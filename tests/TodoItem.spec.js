import { mount } from '@vue/test-utils';
import { TodoItem } from '@/components/TodoItem';

describe('TodoItem.js', () => {
  // Mock data
  const task = {
    title: 'Test Task',
    description: 'Task Description',
    completed: false
  };
  
  const categoryType = 'mental';
  const taskIndex = 2;
  
  it('renders the task properly', () => {
    const wrapper = mount(TodoItem, {
      props: {
        task,
        categoryType,
        taskIndex
      }
    });
    
    // Check if the component renders the task title and description
    expect(wrapper.text()).toContain('Test Task');
    expect(wrapper.text()).toContain('Task Description');
    
    // Check if checkbox is not checked initially
    const checkbox = wrapper.find('input[type="checkbox"]');
    expect(checkbox.element.checked).toBe(false);
  });
  
  it('emits change event when checkbox is clicked', async () => {
    const wrapper = mount(TodoItem, {
      props: {
        task,
        categoryType,
        taskIndex
      }
    });
    
    // Simulate checkbox click
    const checkbox = wrapper.find('input[type="checkbox"]');
    await checkbox.setChecked(true);
    
    // Check if change event was emitted
    expect(wrapper.emitted()).toHaveProperty('change');
    
    // Check if task.completed was updated
    expect(task.completed).toBe(true);
  });
  
  it('generates correct checkbox ID', () => {
    const wrapper = mount(TodoItem, {
      props: {
        task,
        categoryType,
        taskIndex
      }
    });
    
    // Check computed property result
    expect(wrapper.vm.checkboxId).toBe('mental-task-2');
    
    // Check if this ID is actually used in the template
    const checkbox = wrapper.find('input[type="checkbox"]');
    expect(checkbox.attributes('id')).toBe('mental-task-2');
  });
  
  it('applies completed class when task is completed', async () => {
    const completedTask = {
      ...task,
      completed: true
    };
    
    const wrapper = mount(TodoItem, {
      props: {
        task: completedTask,
        categoryType,
        taskIndex
      }
    });
    
    // Check if completed class is applied
    expect(wrapper.classes()).toContain('completed');
    
    // Check if the checkbox is checked
    const checkbox = wrapper.find('input[type="checkbox"]');
    expect(checkbox.element.checked).toBe(true);
  });
});