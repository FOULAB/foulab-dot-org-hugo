+++
title = "Golem Turing Machine Listing"
headline = "Golem Turing Machine Listing"
+++

```
# Turing machine program
#
# Process
#
# 1 step through tape to active cell
# 2 process cell
#    2a write cell value to machine register
#    2a jump to machine
#    2b branch to register / machine state code
#    2c If machine is in tape writing mode
#      2c-i set new tape value
#      2c-j set machine so next machine call shifts tape
#      2c-k jump to tape start
#    2d else machine is in tape shifting mode
#      2d-i set machine so next machine call writes tape
#      2d-j change machine state
#      2d-k jump to tape shifting start
# 3 tape writing - step through tape to active cell
# 4 process cell
#    4a jump to machine
# 5 tape shifting right - step through tape to active cell
#   write previous cell as active
#   jump to previous cell
# 6 tape shifting left
#   mark this cell as inactive
#   jump to next cell
#
#   This state machine is
#   0 A   1 R B
#   0 B   1 L A
#   0 C   1 L B
#   1 A   1 L C
#   1 B   1 R B
#   1 C   1 - H
#
#Label      address instruction write-to-register jump-to-register color ;comment
                 0 1 0 51              w ; jump to tape
# state machine (A - 0 0, B 0 1, C 1 0)
HALT:            1 1 0 +0              K ; HALT STATE
Input:           2 0 +0 (C1B)          b ; input buffer
C0B:             3 0 +0 (CZeroStart)   b ; tape was zero
B0B:             4 0 +0 (BZeroStart)   b ;
#----------
AZeroStart:      5 1 +0    +5         r ; azerostart
                 6 1 -1    +1         w ; set writemode
                 7 1 (B0B) +1         w ;
                 8 1 (B1B) +1         w ;
                 9 1 -1    (T0SR)  w ;
                10 0 -5    +1         w ; set shiftmode
                11 1 -0    (T0W1)   w ;
#----------
BZeroStart:     12 1 +0    +5         r ; bzerostart
                13 1 -1    +1         w ; set writemode
                14 0 4     +1         w ;
                15 0 29 +1         w ;
                16 1 -1    (T0SL)   w ;
                17 0 -5    +1         w ; set shiftmode
                18 1 -0    (T0W1)   w ;
#----------
CZeroStart:     19 1 +0    +7         r ; czerostart
                20 1 -1    +1         w ; set writemode
                21 0 3     +1         w ; change state
                22 0 28    +1         w ;
                23 1 4     +1         w ;
                24 1 29    +1         w ;
                25 1 -1    (T0SL)   w ;
                26 0 -7    +1         w ; set shiftmode
                27 1 -0    (T0W1)   w ;
#----------
C1B:            28 0 +0 44            b ; tape was one
B1B:            29 0 +0 37            b ;
                30 1 +0    +5         r ; aonestart
                31 1 -1    +1         w ; set writemode
                32 1  3    +1         w ;
                33 1 28    +1         w ;
                34 1 -1    (T0SL)  w ;
                35 0 -5    +1         w ; set shiftmode
                36 1 -0    (T0W1)   w ;
#----------
BOneStart:      37 1 +0    +5         r ; bonestart
                38 1 -1    +1         w ; set writemode
                39 0 4     +1         w ;
                40 0 28    +1         w ;
                41 1 -1    (T0SR)   w ;
                42 0 -5    +1         w ; set shiftmode
                43 1 -0    (T0W1)   w ;
#----------
COneStart:      44 1 +0    +2         r ; conestart
                45 1 -1    (HALT)     w ; set writemode
                46 0 -2    +1         w ; set shiftmode
                47 1 -0    (T0W1)   w ;
#---------
#----------
#-----------
                48 0 0 0 K;----
ERROR:          49 1 +0 +0 O;ERROR
                50 0 0 0 K;----

                #  --  Tape  --
############## T1 ########################
T0:            51 1 +0        (T1)     P ; jump to next
                # - write to state machn
T0VAL:          . 0 (Input)    +1      G ; T0VAL
                . 1 +0        (Input)  r ; jump to machine
                # write 1
T0W1:           . 1 +0        (T1W1)   p ; jump to next W1
                . 1 (T0VAL)   (Input)  r ;
                # write 0
T0W0:           . 1 +0        (T1W0)   p ; jump to next W0
                . 0 (T0VAL)   (Input)  y ;
                . 1 +0        (Input)  r ;
                # - step left
T0SL:           . 1 +0        (T1SL)   p ; jump to next SL
                . 1 +0        (ERROR)  y ; no previous
  #              . 0 +0        +1       y ;
  #              . 0 +0        +1       y ;
  #              . 0 +0        +1       y ;
  #              . 0 +0        +0       y ;
                . 1 +0        +0       r ; jump back one
                # - step right
T0SR:           . 1 +0       (T1SR)    p ; jump to next SR
                . 1 (T0W1)   +1        y ; deactivate this
                . 1 (T0W0)   +1        y ;
                . 1 (T0SL)   +1        y ;
                . 1 (T0SR)   +1        y ;
                . 1 (T0)     (T1)      r ;
                # fall through to next tape cell

############## T1 ########################
T1:             . 1 +0        (T2)     P ; jump to next
                # - write to state machn
T1VAL:          . 0 (Input)    +1      G ; T1VAL
                . 1 +0        (Input)  r ; jump to machine
                # write 1
T1W1:           . 1 +0        (T2W1)   p ; jump to next W1
                . 1 (T1VAL)   (Input)  r ;
                # write 0
T1W0:           . 1 +0        (T2W0)   p ; jump to next W0
                . 0 (T1VAL)   (Input)  y ;
                . 1 +0        (Input)  r ;
                # - step left
T1SL:           . 1 +0        (T2SL)   p ; jump to next SL
                . 0 (T0W1)    +1       y ; activate previous
                . 0 (T0W0)    +1       y ;
                . 0 (T0SL)    +1       y ;
                . 0 (T0SR)    +1       y ;
                . 0 (T0)     (T0)      y ;
                . 1 +0       (T0)      r ; jump back one
                # - step right
T1SR:           . 1 +0       (T2SR)    p ; jump to next SR
                . 1 (T1W1)   +1        y ; deactivate this
                . 1 (T1W0)   +1        y ;
                . 1 (T1SL)   +1        y ;
                . 1 (T1SR)   +1        y ;
                . 1 (T1)     (T2)      r ;
                # fall through to next tape cell


############## T2 ########################
T2:             . 1 +0         (T3)    P ; jump to next
                # - write to state machn
T2VAL:          . 0 (Input)    +1      G ; T2VAL
                . 1 +0        (Input)  r ; jump to machine
                # write 1
T2W1:           . 1 +0        (T3W1)   p ; jump to next W1
                . 1 (T2VAL)   (Input)  r ;
                # write 0
T2W0:           . 1 +0        (T3W0)   p ; jump to next W0
                . 0 (T2VAL)   (Input)  y ;
                . 1 +0        (Input)  r ;
                # - step left
T2SL:           . 1 +0        (T3SL)   p ; jump to next SL
                . 0 (T1W1)    +1       y ; activate previous
                . 0 (T1W0)    +1       y ;
                . 0 (T1SL)    +1       y ;
                . 0 (T1SR)    +1       y ;
                . 0 (T1)     (T1)      y ;
                . 1 +0       (T1)      r ; jump back one
                # - step right
T2SR:           . 1 +0       (T3SR)    p ; jump to next SR
                . 1 (T2W1)   +1        y ; deactivate this
                . 1 (T2W0)   +1        y ;
                . 1 (T2SL)   +1        y ;
                . 1 (T2SR)   +1        y ;
                . 1 (T2)     (T3)      r ;
                # fall through to next tape cell


############## T3 ########################
T3:             . 0 +0         (T4)    P ; jump to next
                # - write to state machn
T3VAL:          . 0 (Input)    +1      G ; T3VAL
                . 1 +0        (Input)  r ; jump to machine
                # write 1
T3W1:           . 0 +0        (T4W1)   p ; jump to next W1
                . 1 (T3VAL)   (Input)  r ;
                # write 0
T3W0:           . 0 +0        (T4W0)   p ; jump to next W0
                . 0 (T3VAL)   (Input)  y ;
                . 1 +0        (Input)  r ;
                # - step left
T3SL:           . 0 +0        (T4SL)   p ; jump to next SL
                . 0 (T2W1)    +1       y ; activate previous
                . 0 (T2W0)    +1       y ;
                . 0 (T2SL)    +1       y ;
                . 0 (T2SR)    +1       y ;
                . 0 (T2)     (T2)      y ;
                . 1 +0       (T2)      r ; jump back one
                # - step right
T3SR:           . 0 +0       (T4SR)    p ; jump to next SR
                . 1 (T3W1)   +1        y ; deactivate this
                . 1 (T3W0)   +1        y ;
                . 1 (T3SL)   +1        y ;
                . 1 (T3SR)   +1        y ;
                . 1 (T3)     (T4)      r ;
                # fall through to next tape cell


############## T4 ########################
T4:             . 0 +0         (T5)    P ; jump to next
                # - write to state machn
T4VAL:          . 0 (Input)    +1      G ; T4VAL
                . 1 +0        (Input)  r ; jump to machine
                # write 1
T4W1:           . 0 +0        (T5W1)   p ; jump to next W1
                . 1 (T4VAL)   (Input)  r ;
                # write 0
T4W0:           . 0 +0        (T5W0)   p ; jump to next W0
                . 0 (T4VAL)   (Input)  y ;
                . 1 +0        (Input)  r ;
                # - step left
T4SL:           . 0 +0        (T5SL)   p ; jump to next SL
                . 0 (T3W1)    +1       y ; activate previous
                . 0 (T3W0)    +1       y ;
                . 0 (T3SL)    +1       y ;
                . 0 (T3SR)    +1       y ;
                . 0 (T3)     (T3)      y ;
                . 1 +0       (T3)      r ; jump back one
                # - step right
T4SR:           . 0 +0       (T5SR)    p ; jump to next SR
                . 1 (T4W1)   +1        y ; deactivate this
                . 1 (T4W0)   +1        y ;
                . 1 (T4SL)   +1        y ;
                . 1 (T4SR)   +1        y ;
                . 1 (T4)     (T5)      r ;
                # fall through to next tape cell


############## T5 ########################
T5:             . 0 +0        (T6)     P ; jump to next
                # - write to state machn
T5VAL:          . 0 (Input)    +1      G ; T5VAL
                . 1 +0        (Input)  r ; jump to machine
                # write 1
T5W1:           . 0 +0        (T6W1)   p ; jump to next W1
                . 1 (T5VAL)   (Input)  r ;
                # write 0
T5W0:           . 0 +0        (T6W0)   p ; jump to next W0
                . 0 (T5VAL)   (Input)  y ;
                . 1 +0        (Input)  r ;
                # - step left
T5SL:           . 0 +0        (T6SL)   p ; jump to next SL
                . 0 (T4W1)    +1       y ; activate previous
                . 0 (T4W0)    +1       y ;
                . 0 (T4SL)    +1       y ;
                . 0 (T4SR)    +1       y ;
                . 0 (T4)     (T4)      y ;
                . 1 +0       (T4)      r ; jump back one
                # - step right
T5SR:           . 0 +0       (T6SR)    p ; jump to next SR
                . 1 (T5W1)   +1        y ; deactivate this
                . 1 (T5W0)   +1        y ;
                . 1 (T5SL)   +1        y ;
                . 1 (T5SR)   +1        y ;
                . 1 (T5)     (T6)      r ;
                # fall through to next tape cell


############## T6 ########################
T6:             . 0 +0        (ERROR)  P ; no next
                # - write to state machn
T6VAL:          . 0 (Input)    +1      G ; T6VAL
                . 1 +0        (Input)  r ; jump to machine
                # write 1
T6W1:           . 0 +0        (ERROR)  p ; no next
                . 1 (T6VAL)   (Input)  r ;
                # write 0
T6W0:           . 0 +0        (ERROR)  p ; no next
                . 0 (T6VAL)   (Input)  y ;
                . 1 +0        (Input)  r ;
                # - step left
T6SL:           . 0 +0        (ERROR)  p ; no next
                . 0 (T5W1)    +1       y ; activate previous
                . 0 (T5W0)    +1       y ;
                . 0 (T5SL)    +1       y ;
                . 0 (T5SR)    +1       y ;
                . 0 (T5)     (T5)      y ;
                . 1 +0       (T5)      r ; jump back one
                # - step right
T6SR:           . 0 +0       (ERROR)   p ; no next
   #             . 1 (T6W1)   +1        y ; deactivate this
   #             . 1 (T6W0)   +1        y ;
   #             . 1 (T6SL)   +1        y ;
   #             . 1 (T6SR)   +1        y ;
                . 1 (T6)     (ERROR)   r ;
                # fall through to next tape cell
```
