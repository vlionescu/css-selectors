import ex1 from './ex1.html';
import ex2 from './ex2.html';
import ex3 from './ex3.html';
import ex4 from './ex4.html';
import ex5 from './ex5.html';
import ex6 from './ex6.html';
import ex7 from './ex7.html';
import ex8 from './ex8.html';
import ex12 from './ex12.html';

export default [
    {selector: '#main', question: 'The element that has the id of "main"', html: ex1},
    {selector: 'svg', question: 'The svg element', html: ex2},
    {selector: 'li a', question: 'The anchor tags inside of the list"', html: ex3},
    {selector: 'ul+p', question: 'The paragraph element that immediately follows a list', html: ex4},
    {selector: 'ul~p', question: 'The first paragraph that follows the list', html: ex5},
    {selector: 'button:disabled', question: 'The recover password button', html: ex6},
    {selector: '.angular-links a', question: 'The links for angular', html: ex7},
    {selector: 'input[type="checkbox"]:checked:disabled', question: 'The checkbox that is selected and checked', html: ex8},
    {selector: 'input[type="submit"]', question: 'Login button', html: ex12},
];
