/**
 * Header component
 * Displays the app header with logo, title, subtitle and streak counter
 */
export const Header = {
    props: {
        translate: {
            type: Function,
            required: true
        },
        streakDays: {
            type: Number,
            default: 0
        }
    },
    
    emits: ['tell-duck-joke'],
    
    template: `
        <header>
            <div class="logo-container">
                <div class="duck-logo" 
                     @click="$emit('tell-duck-joke')" 
                     tabindex="0" 
                     role="button" 
                     aria-label="Duck logo - click for a joke">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 879 879" aria-hidden="true">
                        <path d="M 297.500 246.072 C 278.410 247.442, 259.620 249.077, 256.244 249.661 L 252.989 250.225 253.244 333.362 L 253.500 416.500 287.750 416.763 L 322 417.026 322 401.763 L 322.001 386.500 338.250 386.413 C 356.262 386.317, 364.621 384.705, 376.893 378.963 C 397.419 369.358, 412.844 350.573, 417.541 329.461 C 419.677 319.859, 419.102 296.806, 416.493 287.500 C 409.751 263.444, 393.142 250.816, 362.517 246.461 C 351.603 244.909, 316.614 244.699, 297.500 246.072 M 340.500 289.845 C 335.021 291.899, 329.280 295.069, 324.250 298.816 L 321 301.237 321 319.952 C 321 330.245, 321.278 338.945, 321.618 339.284 C 322.585 340.252, 338.822 331.720, 345.789 326.583 C 353.051 321.229, 357.418 314.960, 359.090 307.488 C 362.295 293.167, 353.614 284.928, 340.500 289.845" stroke="none" fill="#ff007f" fill-rule="evenodd"/>
                        <path d="M 402.032 1.115 C 317.376 8.626, 236.191 40.406, 169.885 91.989 C 139.296 115.785, 111.614 143.896, 88.025 175.118 C 38.021 241.301, 7.952 320.540, 1.054 404.304 C -0.301 420.763, -0.301 458.237, 1.054 474.696 C 11.536 601.997, 74.857 716.050, 177.710 792.885 C 225.475 828.567, 285.197 855.861, 344 868.882 C 379.884 876.828, 396.399 878.490, 439.500 878.490 C 476.252 878.490, 486.343 877.784, 512.500 873.385 C 612.148 856.627, 704.410 804.910, 770.968 728.500 C 809.896 683.811, 839.028 632.602, 857.683 576.070 C 866.905 548.122, 874.845 509.753, 877.059 482.426 C 877.680 474.767, 878.595 467.719, 879.094 466.764 C 880.243 464.561, 880.296 410.699, 879.148 411.408 C 878.680 411.698, 877.997 407.337, 877.631 401.717 C 875.780 373.324, 867.678 333.218, 857.659 302.857 C 842.049 255.554, 818.029 210.035, 788.662 172.102 C 745.283 116.072, 693.780 74.169, 630.500 43.422 C 581.860 19.788, 530.699 5.835, 475 1.013 C 461.492 -0.157, 415.642 -0.092, 402.032 1.115 M 307 115.134 C 250.632 120.895, 195.987 149.495, 159.205 192.488 C 113.494 245.918, 95.178 314.328, 108.062 383.500 C 117.521 434.282, 146.127 482.412, 186.500 515.473 C 199.045 525.746, 204.956 529.721, 226.078 542.090 C 244.205 552.706, 261.011 562.558, 303 587.187 C 317.575 595.736, 386.875 636.381, 457 677.510 C 527.125 718.639, 586.905 753.362, 589.843 754.673 C 609.880 763.613, 641.209 766.653, 665.300 761.996 C 707.390 753.860, 742.549 727.074, 761.771 688.500 C 777.090 657.759, 779.692 619.913, 768.785 586.500 C 763.829 571.317, 756.337 558.708, 726.778 515.802 C 700.174 477.185, 660.516 419.579, 598.522 329.500 C 584.138 308.600, 559.380 272.600, 543.504 249.500 C 512.400 204.243, 508.164 198.478, 497.575 187.004 C 449.010 134.374, 378.592 107.818, 307 115.134 M 0.440 439.500 C 0.440 454.900, 0.579 461.060, 0.748 453.189 C 0.917 445.319, 0.917 432.719, 0.747 425.189 C 0.578 417.660, 0.439 424.100, 0.440 439.500" stroke="none" fill="#8a2be2" fill-rule="evenodd"/>
                        <path d="M 307 115.134 C 250.632 120.895, 195.987 149.495, 159.205 192.488 C 113.494 245.918, 95.178 314.328, 108.062 383.500 C 117.521 434.282, 146.127 482.412, 186.500 515.473 C 199.045 525.746, 204.956 529.721, 226.078 542.090 C 244.205 552.706, 261.011 562.558, 303 587.187 C 317.575 595.736, 386.875 636.381, 457 677.510 C 527.125 718.639, 586.905 753.362, 589.843 754.673 C 609.880 763.613, 641.209 766.653, 665.300 761.996 C 707.390 753.860, 742.549 727.074, 761.771 688.500 C 777.090 657.759, 779.692 619.913, 768.785 586.500 C 763.829 571.317, 756.337 558.708, 726.778 515.802 C 700.174 477.185, 660.516 419.579, 598.522 329.500 C 584.138 308.600, 559.380 272.600, 543.504 249.500 C 512.400 204.243, 508.164 198.478, 497.575 187.004 C 449.010 134.374, 378.592 107.818, 307 115.134 M 297.500 246.072 C 278.410 247.442, 259.620 249.077, 256.244 249.661 L 252.989 250.225 253.244 333.362 L 253.500 416.500 287.750 416.763 L 322 417.026 322 401.763 L 322.001 386.500 338.250 386.413 C 356.262 386.317, 364.621 384.705, 376.893 378.963 C 397.419 369.358, 412.844 350.573, 417.541 329.461 C 419.677 319.859, 419.102 296.806, 416.493 287.500 C 409.751 263.444, 393.142 250.816, 362.517 246.461 C 351.603 244.909, 316.614 244.699, 297.500 246.072 M 340.500 289.845 C 335.021 291.899, 329.280 295.069, 324.250 298.816 L 321 301.237 321 319.952 C 321 330.245, 321.278 338.945, 321.618 339.284 C 322.585 340.252, 338.822 331.720, 345.789 326.583 C 353.051 321.229, 357.418 314.960, 359.090 307.488 C 362.295 293.167, 353.614 284.928, 340.500 289.845" stroke="none" fill="#fbd304" fill-rule="evenodd"/>
                    </svg>
                    <span class="duck-tooltip">What The Quack?</span>
                </div>
                <h1 class="main-title">{{ translate('mainTitle') }}</h1>
            </div>
            <p class="subtitle">{{ translate('subtitle') }}</p>
            <!-- Dedication for Muszka -->
            <span class="dedication">Od Żuczka dla Muszki, z miłością</span>
            <div v-if="streakDays > 0" class="streak-counter" aria-live="polite">
                <span class="streak-flame" aria-hidden="true"><i class="fas fa-fire"></i></span>
                <span class="streak-count">{{ translate('streakDays', streakDays) }}</span>
            </div>
        </header>
    `
};