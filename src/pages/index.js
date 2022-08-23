import 'normalize.css/normalize.css';
import '../vendor/select2.min.css';
import '../scripts/select2.full.min.js';
import './index.css';

$(document).ready(function() {
    $('.js-select2').select2({
        theme: "classic"
    });
});
