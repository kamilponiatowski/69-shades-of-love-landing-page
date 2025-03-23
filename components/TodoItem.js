/**
 * TodoItem component
 * Displays a single task with checkbox
 */
export const TodoItem = {
    props: {
        task: {
            type: Object,
            required: true
        },
        categoryType: {
            type: String,
            required: true
        },
        taskIndex: {
            type: Number,
            required: true
        }
    },
    
    emits: ['change'],
    
    computed: {
        /**
         * Generated ID for checkbox
         * @returns {string}
         */
        checkboxId() {
            return `${this.categoryType}-task-${this.taskIndex}`;
        }
    },
    
    template: `
        <div :class="['todo-item', {completed: task.completed}]">
            <input 
                type="checkbox" 
                class="todo-checkbox" 
                v-model="task.completed" 
                @change="$emit('change')" 
                :id="checkboxId"
                :aria-label="task.title + ': ' + task.description">
            <div class="todo-text">
                <label :for="checkboxId">{{ task.title }}</label>
                <div class="description">{{ task.description }}</div>
            </div>
        </div>
    `
};