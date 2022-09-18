# TIC-TAC-TOE
//********Title***********


// ******TIC-TAC-TOE******


//********Project Description*********



/* TIC TAC TOE is a game played on a grid that's 3 squares by 3 squares.
The fisrt player is  X, and the second player is O. Players take turns putting their marks in empty squares.
The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.
When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a draw. 
This project was built usign HTML, CSS, and JavaScript( for the logic of it na functionality of it*/



//*********How to install and Run TIC TAC TOE***************

// The project in order to install and run would need to do a pull using git and github. 
// I attached a link in how to pull the project from github to our VSCode //https://www.youtube.com/watch?v=_ynMa2XlRgk


//********How the project is used *************

//First of all we call the elements using DOM JavaScripts concepts.
//![image](https://user-images.githubusercontent.com/110556973/190923256-6789c3e0-5de0-403d-9dbf-71217a6da49a.png)

//Second the call a constant variable which determines the row and columns combinations in order to determined a winner. 


//![image](https://user-images.githubusercontent.com/110556973/190923559-23e617d5-7fe5-4b69-957f-6198c4085b07.png)


// The we are going to use a variable called options which is a array that contains empty //spaces that later are going top be used to interact with the previous array.
//We alse declare the varible player which determines the HTML text inserted
//and a variable called running which is going to detemrine by true or false if we are 
// playing the game or no. 


//![image](https://user-images.githubusercontent.com/110556973/190923685-b98d49ba-92ae-4d37-adf9-b48672d4bdd9.png)

//Here are the functions that make possible this game to work and its functionalities


//gameStart()

//![image](https://user-images.githubusercontent.com/110556973/190924044-ab36ad31-4a7e-4ce9-b6c7-590479e02a9a.png)


//boxClicked()


// ![image](https://user-images.githubusercontent.com/110556973/190924082-af1db57c-1408-4bd3-8752-808b3347c9fd.png)


//updateBox()


//![image](https://user-images.githubusercontent.com/110556973/190924113-c7597a8c-f34e-4171-993f-9dfc39ceaee1.png)

//switchPlayer


//![image](https://user-images.githubusercontent.com/110556973/190924142-7780ba84-5eb8-4ca2-8957-ca9ee89aebf7.png)



//checkWinner()


//![image](https://user-images.githubusercontent.com/110556973/190924185-b6d48135-7fe6-4794-9502-41ac57d0df25.png)

// checkWinner() continues


//![image](https://user-images.githubusercontent.com/110556973/190924211-5c5958cf-ec52-4a77-8316-cdd3674bdfef.png


//restartGame()

//![image](https://user-images.githubusercontent.com/110556973/190924247-228b1a29-8ca8-4f37-abe3-6784a96161bf.png)

//In order to make everythig run we need to call just functions in the
// folllowing order


//restartGame()
//gameStart()
