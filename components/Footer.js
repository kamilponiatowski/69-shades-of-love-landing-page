/**
 * Footer component
 * Displays the app footer with attribution and contact information
 */
export const Footer = {
    props: {
        translate: {
            type: Function,
            required: true
        }
    },
    
    template: `
        <footer class="footer" v-html="translate('footer')">
            <!-- Footer content is provided via translation -->
        </footer>
    `
};