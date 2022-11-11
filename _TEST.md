## Requirements
### Functional
The application shall provide...
1. two players.
2. two goals.
3. one ball.
4. a football field.

As an end user I want...
5. to be able to control a player.
6. to be able to kick the ball.
7. to not be able to run outside the football field(the canvas).
8. to be able to score a goal.
9. to be able to see my current score.

### Non-functional
The system shall...
- be developed using Javascript.
- be ran using Vite's dev server.
- be tested using manual, top-down, integration tests.
- embrace an MVC-architecture.
- embrace an OOP-structure.

## Testing
### Use case 1: View rendering.

#### Test case 1.1: Two players.
#### Requirement: 1
Run the application by entering 'npm run vite' in the terminal.
#### Expected outcome: Two player sprites are visible.

#### Test case 1.2: Two goals.
#### Requirement: 2
Run the application by entering 'npm run vite' in the terminal.
#### Expected outcome: Two goals are visible.

#### Test case 1.3: One ball.
#### Requirement: 3
Run the application by entering 'npm run vite' in the terminal.
#### Expected outcome: One ball is visible.

#### Test case 1.4: One football field.
#### Requirement: 4
Run the application by entering 'npm run vite' in the terminal.
#### Expected outcome: A football field is visible.

### Use case 2-10 Prerequisites: Application is running.

### Use case 2: Moving the red team player.
#### Requirement: 5

#### Test case 2.1: Move player up.
Press and hold down the 'arrow up' key.
#### Expected outcome: Red team player moves up.

#### Test case 2.2: Move player right.
Press and hold down the 'arrow right' key.
#### Expected outcome: Red team player moves right.

#### Test case 2.3: Move player down.
Press and hold down the 'arrow down' key.
#### Expected outcome: Red team player moves down.

#### Test case 2.4: Move player left.
Press and hold down the 'arrow left' key.
#### Expected outcome: Red team player moves left.

#### Test case 2.5: Move player diagonally up-right.
Press and hold down both the 'arrow up' and 'arrow right' key.
#### Expected outcome: Red team player moves up-right.

#### Test case 2.6: Move player diagonally down-right.
Press and hold down both the 'arrow down' and 'arrow right' key.
#### Expected outcome: Red team player moves down-right.

#### Test case 2.7: Move player diagonally down-left.
Press and hold down both the 'arrow down' and 'arrow left' key.
#### Expected outcome: Red team player moves down-left.

#### Test case 2.8: Move player diagonally up-left.
Press and hold down both the 'arrow up' and 'arrow left' key.
#### Expected outcome: Red team player moves down-left.

### Use case 3: Moving the green team player.
#### Requirement: 5
#### Test case 3.1 - 3.8
Same tests as use case 2 but keys are; 'w' for up, 'a' for left, 's' for down and 'd' for right.

### Use case 4: Kicking the ball with red team player.
#### Requirement: 6
#### Prerequisites: Use case 2.
#### Test case 4.1: Colliding player into the ball.
Press and hold down the 'arrow right' key until the player sprite collides with the ball.
#### Expected outcome: The ball moves away from the player in the opposite direction as the approaching player.

### Use case 5: Kicking the ball with green team player.
#### Requirement: 6
#### Prerequisites: Use case 2.
#### Test case 5.1: Colliding player into the ball.
Press and hold down the 'a' key until the player sprite collides with the ball.
#### Expected outcome: The ball moves away from the player in the opposite direction as the approaching player.

### Use case 6: Movement boundaries red team player.
#### Requirement: 7
#### Prerequisites: Use case 2.
#### Test case 6.1: Collision check upper boundary.
Press and hold down the 'arrow up' key until the player reaches the top edge of the canvas.
While holding down the 'arrow up' key, hold the 'arrow right' key until the player reaches the top-right corner of the canvas.
Release the 'arrow right' key.
While holding down the 'arrow up key', hold the 'arrow left' key until the player reaches the top-left corner of the canvas.
#### Expected outcome: The player has no vertical movement after reaching top edge. Does not in any moment, go through the upper movement boundary and leave the canvas.

#### Test case 6.2: Collision check right boundary.
Press and hold down the 'arrow right' key until the player reaches the right edge of the canvas.
While holding down the 'arrow right' key, press and hold down the 'arrow down' key until the player reaches the bottom-right corner of the canvas.
Release the 'arrow down' key.
While holding down the 'arrow right' key, press and hold down the 'arrow up' key until the player reaches the top-right corner of the canvas.
#### Expected outcome: The player has no horizontal movement after reaching right edge. Does not in any moment, go through the right movement boundary and leave the canvas.

#### Test case 6.3: Collision check lower boundary.
Press and hold down the 'arrow down' key until the player reaches the bottom edge of the canvas.
While holding down the 'arrow down' key, press and hold down the 'arrow left' key until the player reaches the bottom-left corner of the canvas.
Release the 'arrow left' key.
While holding down the 'arrow down' key, press and hold down the 'arrow right' key until the player reaches the bottom-right corner of the canvas.
#### Expected outcome: The player has no vertical movement after reaching bottom edge. Does not in any moment, go through the right movement boundary and leave the canvas.

#### Test case 6.4: Collision check left boundary.
Press and hold down the 'arrow left' key until the player reaches the left edge of the canvas.
While holding down the 'arrow left' key, press and hold down the 'arrow down' key until the player reaches the bottom-left corner of the canvas.
Release the 'arrow down' key.
While holding down the 'arrow left' key, press and hold down the 'arrow up' key until the player reaches the top-left corner of the canvas.
#### Expected outcome: The player has no horizontal movement after reaching left edge. Does not in any moment, go through the left movement boundary and leave the canvas.

### Use case 7: Movement boundaries green team player.
#### Requirement: 7
#### Prerequisites: Use case 2.
#### Test case 7.1 - 7.4
Same tests as use case 2 but keys are; 'w' for up, 'a' for left, 's' for down and 'd' for right.

### Use case 8: Score a goal.
#### Requirement: 8, 9
#### Prerequisites: Use case 2, 4
#### Test case 8.1: Ball collides with red goal.
Run with a player and kick the ball so it collides with the red goal.
#### Expected outcome: On the scoreboard, the green team score increases by one. 

#### Test case 8.2: Ball collides with green goal.
Run with a player and kick the ball so it collides with the green goal.
#### Expected outcome: On the scoreboard, the red team score increases by one. 