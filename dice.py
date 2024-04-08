import random
import sys






#Dice object class. This will create a die(s) with any number of sides as provided by the user. 
class dice():
    def __init__(self, sides, number_of_dice=1):
        self.sides = sides
        self.number_of_dice = number_of_dice
        
        
    def roll(self):
        total = 0
        for i in range(0, self.number_of_dice):
            total+= random.randint(1, self.sides)
        return total
    
    
    


def get_dice_type():
    return input("How many sides would you like the dice to be? ")
    

def get_number_of_dice(sides):
    return input(f"How many {sides}-sided dice would you like to roll?: ")    




def main():
    #Keep rolling until the user wants to stop. Giving a new total each time. 
    roll_again = True
    
    while roll_again:
        #Try to convert input to an integer. If user gives a string we will get a value error and handle that. 
        #Also handle any other weird error separately. 
        try:
            dice_type =  int(get_dice_type())
            number_of_dice = int(get_number_of_dice(dice_type))
        except ValueError as e:
            print("You did not enter a valid value, you must enter a number")
            continue
        except Exception as e:
            print(f"something else went horribly wrong. Here is the error: {e.args[0]}")
                    
        die = dice(dice_type, number_of_dice)
        
        print(f"You rolled {number_of_dice} {dice_type}-sided dice for a total of {die.roll()}")
        
        keep_going = input("Keep rolling?(y/n): " )
        
        if keep_going.lower() == 'y':
            continue
        else:
            print("Thanks for playing!")
            roll_again = False
            
            
            
            
            
if __name__ == "__main__":
    main()




