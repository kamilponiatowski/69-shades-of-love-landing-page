// @/constants/categories.ts
import type { Category } from '../stores/taskStore';

/**
 * Self-care tasks data organized by categories
 * Each category contains tasks with title, description and completed state
 */
export const categories: Category[] = [
    {
        name: "Physical",
        type: "physical",
        tasks: [
            { titleKey: "task_physical_1_title", descriptionKey: "task_physical_1_desc", completed: false },
            { titleKey: "task_physical_2_title", descriptionKey: "task_physical_2_desc", completed: false },
            { titleKey: "task_physical_3_title", descriptionKey: "task_physical_3_desc", completed: false },
            { titleKey: "task_physical_4_title", descriptionKey: "task_physical_4_desc", completed: false },
            { titleKey: "task_physical_5_title", descriptionKey: "task_physical_5_desc", completed: false },
            { titleKey: "task_physical_6_title", descriptionKey: "task_physical_6_desc", completed: false },
            { titleKey: "task_physical_7_title", descriptionKey: "task_physical_7_desc", completed: false },
            { titleKey: "task_physical_8_title", descriptionKey: "task_physical_8_desc", completed: false },
            { titleKey: "task_physical_9_title", descriptionKey: "task_physical_9_desc", completed: false },
            { titleKey: "task_physical_10_title", descriptionKey: "task_physical_10_desc", completed: false },
            { titleKey: "task_physical_11_title", descriptionKey: "task_physical_11_desc", completed: false },
            { titleKey: "task_physical_12_title", descriptionKey: "task_physical_12_desc", completed: false },
            { titleKey: "task_physical_13_title", descriptionKey: "task_physical_13_desc", completed: false },
            { titleKey: "task_physical_14_title", descriptionKey: "task_physical_14_desc", completed: false },
            { titleKey: "task_physical_15_title", descriptionKey: "task_physical_15_desc", completed: false },
            { titleKey: "task_physical_16_title", descriptionKey: "task_physical_16_desc", completed: false },
            { titleKey: "task_physical_17_title", descriptionKey: "task_physical_17_desc", completed: false },
            { titleKey: "task_physical_18_title", descriptionKey: "task_physical_18_desc", completed: false },
            { titleKey: "task_physical_19_title", descriptionKey: "task_physical_19_desc", completed: false },
            { titleKey: "task_physical_20_title", descriptionKey: "task_physical_20_desc", completed: false }
        ]
    },
    {
        name: "Mental",
        type: "mental",
        tasks: [
            { titleKey: "task_mental_1_title", descriptionKey: "task_mental_1_desc", completed: false },
            { titleKey: "task_mental_2_title", descriptionKey: "task_mental_2_desc", completed: false },
            { titleKey: "task_mental_3_title", descriptionKey: "task_mental_3_desc", completed: false },
            { titleKey: "task_mental_4_title", descriptionKey: "task_mental_4_desc", completed: false },
            { titleKey: "task_mental_5_title", descriptionKey: "task_mental_5_desc", completed: false },
            { titleKey: "task_mental_6_title", descriptionKey: "task_mental_6_desc", completed: false },
            { titleKey: "task_mental_7_title", descriptionKey: "task_mental_7_desc", completed: false },
            { titleKey: "task_mental_8_title", descriptionKey: "task_mental_8_desc", completed: false },
            { titleKey: "task_mental_9_title", descriptionKey: "task_mental_9_desc", completed: false },
            { titleKey: "task_mental_10_title", descriptionKey: "task_mental_10_desc", completed: false },
            { titleKey: "task_mental_11_title", descriptionKey: "task_mental_11_desc", completed: false },
            { titleKey: "task_mental_12_title", descriptionKey: "task_mental_12_desc", completed: false },
            { titleKey: "task_mental_13_title", descriptionKey: "task_mental_13_desc", completed: false },
            { titleKey: "task_mental_14_title", descriptionKey: "task_mental_14_desc", completed: false },
            { titleKey: "task_mental_15_title", descriptionKey: "task_mental_15_desc", completed: false },
            { titleKey: "task_mental_16_title", descriptionKey: "task_mental_16_desc", completed: false },
            { titleKey: "task_mental_17_title", descriptionKey: "task_mental_17_desc", completed: false }
        ]
    },
    {
        name: "Personal Joy",
        type: "personal",
        tasks: [
            { titleKey: "task_personal_1_title", descriptionKey: "task_personal_1_desc", completed: false },
            { titleKey: "task_personal_2_title", descriptionKey: "task_personal_2_desc", completed: false },
            { titleKey: "task_personal_3_title", descriptionKey: "task_personal_3_desc", completed: false },
            { titleKey: "task_personal_4_title", descriptionKey: "task_personal_4_desc", completed: false },
            { titleKey: "task_personal_5_title", descriptionKey: "task_personal_5_desc", completed: false },
            { titleKey: "task_personal_6_title", descriptionKey: "task_personal_6_desc", completed: false },
            { titleKey: "task_personal_7_title", descriptionKey: "task_personal_7_desc", completed: false },
            { titleKey: "task_personal_8_title", descriptionKey: "task_personal_8_desc", completed: false },
            { titleKey: "task_personal_9_title", descriptionKey: "task_personal_9_desc", completed: false },
            { titleKey: "task_personal_10_title", descriptionKey: "task_personal_10_desc", completed: false },
            { titleKey: "task_personal_11_title", descriptionKey: "task_personal_11_desc", completed: false },
            { titleKey: "task_personal_12_title", descriptionKey: "task_personal_12_desc", completed: false },
            { titleKey: "task_personal_13_title", descriptionKey: "task_personal_13_desc", completed: false },
            { titleKey: "task_personal_14_title", descriptionKey: "task_personal_14_desc", completed: false },
            { titleKey: "task_personal_15_title", descriptionKey: "task_personal_15_desc", completed: false },
            { titleKey: "task_personal_16_title", descriptionKey: "task_personal_16_desc", completed: false },
            { titleKey: "task_personal_17_title", descriptionKey: "task_personal_17_desc", completed: false },
            { titleKey: "task_personal_18_title", descriptionKey: "task_personal_18_desc", completed: false }
        ]
    },
    {
        name: "Relationship",
        type: "relationship",
        tasks: [
            { titleKey: "task_relationship_1_title", descriptionKey: "task_relationship_1_desc", completed: false },
            { titleKey: "task_relationship_2_title", descriptionKey: "task_relationship_2_desc", completed: false },
            { titleKey: "task_relationship_3_title", descriptionKey: "task_relationship_3_desc", completed: false },
            { titleKey: "task_relationship_4_title", descriptionKey: "task_relationship_4_desc", completed: false },
            { titleKey: "task_relationship_5_title", descriptionKey: "task_relationship_5_desc", completed: false },
            { titleKey: "task_relationship_6_title", descriptionKey: "task_relationship_6_desc", completed: false },
            { titleKey: "task_relationship_7_title", descriptionKey: "task_relationship_7_desc", completed: false },
            { titleKey: "task_relationship_8_title", descriptionKey: "task_relationship_8_desc", completed: false },
            { titleKey: "task_relationship_9_title", descriptionKey: "task_relationship_9_desc", completed: false },
            { titleKey: "task_relationship_10_title", descriptionKey: "task_relationship_10_desc", completed: false },
            { titleKey: "task_relationship_11_title", descriptionKey: "task_relationship_11_desc", completed: false },
            { titleKey: "task_relationship_12_title", descriptionKey: "task_relationship_12_desc", completed: false },
            { titleKey: "task_relationship_13_title", descriptionKey: "task_relationship_13_desc", completed: false },
            { titleKey: "task_relationship_14_title", descriptionKey: "task_relationship_14_desc", completed: false }
        ]
    }
];