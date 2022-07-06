# File Interaction Sexy Transaction (FIST) 0.1 (in progress)

The File Interaction Sexy Transaction Model is specified as a Turing Complete File Computer.

FIST will be able to handle most (if not all) of your file system needs in 2 primary functions, 2 callback functions, and 1 constructor.

## We can begin with the 12 Main Concepts:

1. Files
2. Directionality
3. Quantality
4. Clusivity
5. Positionality
6. Conditionals (and Mitigation)
7. Looping
8. Pre-actions
9. Post-actions
10. Syncronicity
11. Chaining
12. Flow
13. Stream
14. Virtual IO

### Files
These are files.
<img src="https://github.com/ItsZeusBro/FileInteractionModel/blob/55cc01abec31d82a72601e547ae22120a9e773b8/Docs/File.png" height=350 width=500/>

### Directionality
Directionality simply means what direction belongs to the flow of data. It is represented by an arrow. This is the most simple idea in the specification and cannot be mistaken because its abstractual. The only things that matter here is the fact that its an arrow. This is because all arrows have a direction, and its direction determines the flow of data. If you have a bidirectional arrow without constraints, you can mirror one files behavior to that of the other (from left to right).

<img src="https://github.com/ItsZeusBro/FileInteractionModel/blob/9a2d4b37b6a05a4f9afdd46c91150b695839755e/Docs/Directionality.jpg" height=350 width=500/>

### Quan-tality (tality is a thing around here)
Quantality defines the constraints upon the flow which defaults to "all data" when not constrained. The quantity of data in the flow matters for all kinds of situations in manipulating files. Different keywords such as All, Half, N, [1, 2, ...N], are used to represent the amount of data (in bits, bytes, or  chunks of arbitrary size) flowing from one file to the other. Don't worry about the other stuff on the diagram here for now.

<img src="https://github.com/ItsZeusBro/FileInteractionModel/blob/9a2d4b37b6a05a4f9afdd46c91150b695839755e/Docs/Quantality1.png" height=350 width=500/>


### Clus-ivity (so is ivity)
Clusivity defines whether some data is inclusive with the source after its flow is executed, or whether some data is exclusive to the new owner. The dashed line represents exclusivity on a portion of the data sent from the source. Meaning, the source no longer has access to that data. (its removed from the source). If the clusivity range is not specified, it is assumed to be categorical to the orientation "inclusive" or "exclusive". So in the case of inclusivity, if a range is specified, then the rest is excluded from the source. And again, in the case of exclusivity, if a range is specified, the rest of the data moving to the target is shared with the source.

<img src="https://github.com/ItsZeusBro/FIST/blob/79db3fc288540bf444f1a8a41e3fd5b24ce18563/Docs/Clusivity.jpg" height=350 width=500/>


### Position-ality (and of course ality)
Positionality defines from what position data flows out of a file, and to what position data flows into a file. These can be abstract concepts (like begining or end) or concrete positional integers (like 1 or 20 or 50).

<img src="https://github.com/ItsZeusBro/FileInteractionModel/blob/a1e934f8cf644f4423608af5b67b903426952137/Docs/Positionality.png" height=350 width=500/>


### Conditionals and Mitigation

Conditionals are basically IF ELSE blocks with boolean statements on the output of the previous statement or statement block. They require a statement or statement block in order to be executable.

<img src="https://github.com/ItsZeusBro/FileInteractionModel/blob/ebe3e781f31dd6331f1ed2725c64e985e666ed6d/Docs/Conditionals.jpg" height=350 width=500/>

Mitigation specifies what happens to an interaction when the initial interaction tried, but failed for some reason.

<img src="https://github.com/ItsZeusBro/FileInteractionModel/blob/733daec245cf3d680554b4c31820bcf90be8f590/Docs/Mitigation.jpg" height=350 width=500/>


### Looping

This is an iterator that runs a statement or statement block until the boolean conditional statement is no longer valid. You can also mitigate the effect of an entire loop, because they are hard to reason about when it comes to files.

<img src="https://github.com/ItsZeusBro/FileInteractionModel/blob/ecee5bbb1793eeb4ca01dc41acf9b59aaceb2a11/Docs/Looping.jpg" height=350 width=500/>


### Pre-Actions
These are actions you specify that are to take place on the data before it is inserted into the file at its given position. These are just functions you pass in.

### Post-Actions
These are actions you specify that are to take place on the file (as a whole) after data is inserted into it at some position


### Syncronicity
If you have a bidriectional flow model, you can use the bidirectional arrow or a second arrow. A bidirectional arrow is evaluated (syncronously) left to right. A second arrow is evaluated top down (syncronously). A biderectional arrow restricts you to the same constraints going in both directions, but left to right flow is evaluated on B first. Then the same constraints are applied in reverse after the first constraints are finished.

### Chaining, Forks, and Junctions
These are for graph models. Which are separate from Standard Flow Models. They look similar to Finite State Machine models in The UML.

Chaining is a modeling technique that demonstrates a compound flow model, where you have a starting node, and flow the data to other nodes syncronously or asyncronously, effectively piping the flow into another node or multiple nodes. Forks are when a file flow syncronously splits into two different asyncronous paths. Two asyncronous paths of execution can only converge on a Junction. They need to terminate on the junction that executes the end result of the flow of a fork. The junction can merge file results in a number of syncronous ways.

### Flow
A Flow in this context is a terminating execution that runs on a File Interaction. It runs left to right, and top down. Like the english language.

<img src="https://github.com/ItsZeusBro/FileInteractionModel/blob/9a2d4b37b6a05a4f9afdd46c91150b695839755e/Docs/Flow.jpg" height=350 width=500/>


### Stream
A Stream in this context is a non-terminating execution (watcher) that runs on a File Interaction. Streams can be chained together with pre and post scripts.

<img src="https://github.com/ItsZeusBro/FIST/blob/167db7350762cfd9486e9d3f73665b7f198e160c/Docs/Streams.png" height=350 width=500/>


### Virtual IO
This is necessary for some of the features of this specification. Temporary files are created to implement some of these features. Every file you reference with the api has a virtual reference under the hood, and the result goes to the hard reference afterwards. So interacting with the files using another api before a job is complete is meaningless because it gets overwritten when File Interaction Execution finishes. For example if you ran a loop on your file interactions, and you had a catch statement if it didn't finish for some reason (finish means something specific here), then it would not affect your actual files until after the catch statement completes without errors.


## Abstract Api
a, b, and c are files. a.flow(b, //whatever) returns b so that you can do something on it. b.stream(c, //whatever) does the same
              
              a.flow( 
                      b, 
                      tality, 
                      ivity, 
                      alityf, 
                      ality,
                      (data)=>{
                              //pre script here  
                      },
                      (data)=>{
                              //post script here
                      }
                      
              ).stream( 
                      c,
                      tality,
                      alityf,
                      ality,
                      (data)=>{
                              //pre script here  
                      },
                      (data)=>{
                              //post script here
                      }
              )
              
# Legend:
  - Don't use these objects to specify your options, i'm just letting you know this. Strings and integers are better for this!
  - ***a*** is a Fist file object or file string
  - ***b*** is a Fist file object or file string
  - ***c*** is a Fist file object or file string
  - ***tality*** corresponds to a quantality value type
  - ***ivity*** corresponds to a clusivity value type
  - ***alityf*** corresponds to "positionality from node x" (meaning the position from which data is pulled from the source file)
  - ***ality*** corresponds to "positionality" (this always represents the position in the file we are writing to

