import './app1.css'
import $ from "jquery"

const $button1 = $(".add")
const $button2 = $(".sub");
const $button3 = $(".mike");
const $button4 = $(".divite");
const $number = $(".number");

$button1.on('click', () => {
    let n = parseInt($number.text());
    n += 1
    $number.text(n);
})