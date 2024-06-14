This is a jackpot project I built using blockchain technology.

### Features:

1. Smart contract testing:
   1. Test coverage > 80%
   2. Gas reporter
   3. Use fixture to increase testing time
2. Upgradable contract
3. Use secure random pattern
4. Tight package variables
5. Use wagmi and rainbowkit to handle interacting with contract in FE
6. Use fully typescript
7. Use optimizer compiler
8. Use automation oracle

### Lottery rule:

#### Lucky number

Lucky number is the combine of six number: A A A A A X.
While first five number is between 1 and 69, the last number is between 1 and 26.

#### Drawing

Every 5 PM, drawing will happen, and the lucky number will be selected randomly.

#### How to win

Your first five number must match first five number of lucky number in any order, and the last number must match lucky number.

#### Rewards

The more drawings that occur without a jackpot winner, the higher the jackpot gets. Jackpots start at a minimum of 1 ETH and increase each time a drawing occurs without a jackpot winner by twenty percent of sold ticket.
If there is other people that win the reward like you, the reward will be divided evenly.
The order of number doesn't matter in case of five first number.

Prices:
1. Jackpot: 1 ETH (no multiply)
2. Match five first number: 1,000,000 * base price = 1000000 * 50000000000 wei = 0.05 ether (only multiply double)
3. Match four first number and 1 last number: 50,000 * base price
4. Match four first number: 100 * base price
5. Match three first number and 1 last number: 100 * base price
6. Match three first number: 7 * base price
7. Match two two number and last number: 7 * base price
8. Match one only last number: 4 * base price

#### Ticket

You can buy a ticket with 50000000000 wei, we call this base price. You can pay more half to get a power play, for getting a chance to multiply your reward between twice and fifth times.
You can also let the computer choose ticket for you.
You have the option to buy the ticket for multiple drawing.


### Application rule:

#### Drawing

Drawing is defined at 05:00 PM, and the lucky number will available between 05:00 PM and 05:20 PM. (use automation oracle services: https://chain.link/automation)
When drawing get lucky number, it will find who won, and send the prices to winner.
Don't allow contract to join (to prevent re-entrance attack that will cause our system stop working)

#### Note

The transfer maybe be delayed for large prices but not exceed 24 hours. 
There will be a ticket history and a winning history.
Allow owner to pause lottery at next frame, we still keep increasing our frameIdx, but we add logic to skip the drawing part if there is no user join. We still need to allow user buy ticket of this frame.
