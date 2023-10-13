import Task from './Todo';

export default {
  component: Task,
  title: 'Todo',
  tags: ['autodocs'],
};


export const Default = {
    args: {
        id: '1',
        name: 'Test Task',
        completed: false,
    },
  };
  
  export const Ticked = {
    args: {
        ...Default.args,
        completed: true,
    },
  };
