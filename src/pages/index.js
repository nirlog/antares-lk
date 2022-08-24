import 'normalize.css/normalize.css';
import 'jquery.scrollbar/jquery.scrollbar.css';
import 'jquery.scrollbar/jquery.scrollbar.min.js';
import '../vendor/select2.min.css';
import '../scripts/select2.min.js';
import './index.css';

$(document).ready(function() {
    $('.scrollbar-inner').scrollbar();
    $('.js-select2').select2({
        theme: "classic"
    });
});
