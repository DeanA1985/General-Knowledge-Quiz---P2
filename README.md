# The Knowledge Quiz 

# How does the Knowledge Quiz Work.

The Knowledge Quiz is a multiple choice quiz which tests the users general knowledge through a set of 10 questions. Each question comes with 4 multiple choice options which are represented by buttons in the app.

When the correct option is selected by the player, the answer button hilights green. If an incorrect option is selected by the player the answer button hilights red and the correct answer is hilighted in every instance once a question is answered the player progresses through the quiz scoring a point for each question they have correct. Incorrect answers do not score points. 

At the end of the quiz the players score is calculated out of 10. And they are congratulated by on screen animations to signifying that they have completed the quiz. 

The project is aimed at any age demographic who just enjoy exercising their general knowledge or who want to learn something new, just for fun. 

![Quiz Mockup](assets/img/quizmockups1.png)
 
### Instructions

![Instructions](assets/img/quizinstructions.png)

### Start Quiz Button

This button starts launches the quiz. Once the quiz is launched a countdown begins on each question.

![StartQuiz](assets/img/startquiz1.png)
![Countdown](assets/img/countdown.png)

### Correct/ Incorrect Answers

As mentioned earlier answers can either pushed right or wrong if the user pushes a incorrect answer the quiz will hilight the correct answer alongside the chosen wrong answer.

Example 1
![IncorrectCorrect](assets/img/correctincorrect.png)

Example 2
![Correct](assets/img/correct.png)

### Final Score and Confetti Drop

Once the player has completed the quiz they are given a score which is their total correct responses out of 20 a confetti explosion accompanies this to evoke a positive emotion of the player finally completing the quiz.

![ScoreandConfetti](assets/img/congratulations.png)

Once the confetti subsides the player can see their score and reset the quiz

![Resetquiz](assets/img/finalscore.png)


# Testing

## HTML

I have passed the code through the w3c validator which returned two errors which do not appear to be effecting the live preview of the html.

[Click for results in html validator](https://validator.w3.org/nu/?showsource=yes&doc=https%3A%2F%2Fdeana1985.github.io%2FGeneral-Knowledge-Quiz---P2%2F#textarea)


## CSS

I have passed the code through the Jigsaw validator which returned a few errors however none of these errors are effecting the functionality of the site
[Click for results in jigsaw validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fdeana1985.github.io%2FGeneral-Knowledge-Quiz---P2%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

## Javascript

I have passed the code through JShint validator which returned no errors. There are 13 functions in this file.

Function with the largest signature take 2 arguments, while the median is 0.

Largest function has 8 statements in it, while the median is 4.

The most complex function has a cyclomatic complexity value of 2 while the median is 2.

## Additional Features on Resubmission of Project 23/3/2025

I have added a 404 page which acts as a page not found if the url for the quiz has been entered incorrectly. 

https://deana1985.github.io/General-Knowledge-Quiz---P2/ if you add anything after the forward slash for example 

https://deana1985.github.io/General-Knowledge-Quiz---P2/bad

The 404 page can be accessed, you can be redirected to the Quiz by clicking a button on the 404 page that takes you back to the quiz.

![404page](assets/img/404page.png)

# Deployment 
The site was deployed to GitHub pages. The steps to deploy are as follows:
- In the GitHub repository, navigate to the Settings tab
- From the source section drop-down menu, select the Master Branch
- Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.
- The live link can be found here https://deana1985.github.io/General-Knowledge-Quiz---P2/

# Credits 

- The content for the quiz was taken from the open trivia database a free to use user contributed trivia question data base. The Open Trivia Database provides a completely free JSON API for use in programming projects. Use of this API does not require a API Key, just generate the URL below use it in your own application to retrieve trivia questions.

All data provided by the API is available under the Creative Commons Attribution-ShareAlike 4.0 International License.





