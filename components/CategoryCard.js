/**
 * CategoryCard component
 * Displays a category card with its tasks
 */
import { TodoItem } from './TodoItem.js';

export const CategoryCard = {
    components: {
        TodoItem
    },
    
    props: {
        category: {
            type: Object,
            required: true
        },
        translate: {
            type: Function,
            required: true
        },
        getCategoryCompletedCount: {
            type: Function,
            required: true
        }
    },
    
    emits: ['task-updated'],
    
    methods: {
        /**
         * Handles task update and emits event to parent
         */
        onTaskUpdated() {
            this.$emit('task-updated');
        }
    },
    
    template: `
        <div :class="['category', category.type]">
            <div class="category-header">
                <h2>{{ translate(category.type + 'Hearts') }}</h2>
                <span>{{ getCategoryCompletedCount(category.type) }}/{{ category.tasks.length }}</span>
            </div>
            <div class="category-body">
                <TodoItem 
                    v-for="(task, taskIndex) in category.tasks" 
                    :key="taskIndex"
                    :task="task"
                    :category-type="category.type"
                    :task-index="taskIndex"
                    @change="onTaskUpdated"
                />
            </div>
        </div>
    `
};