---
layout: post
title: "Logic in High School - Part 1"
date: 2025-05-10 14:00:00 +0700
comments: true
permalink: 2025-05-09-logic-in-high-school-part-01
disqus_identifier: 76f2e370-c8fb-11e5-b76f-080020250510
---

As part of reading [Richard Hammacks's Book of Proof](https://richardhammack.github.io/BookOfProof/), 
I feel like I finally got to *make sense* of a few concepts 
I took for granted in high school. 

The following Wikipedia articles could have been 
the summary of my high-school logic course, had it been more complete. 
It could have been a more complete version, but no, 
the Math course was never that complete

1. [Boolean algebra](https://en.wikipedia.org/wiki/Boolean_algebra#Basic_operations)
1. [Rule of inference (Classical logic)](https://en.wikipedia.org/wiki/Rule_of_inference#Propositional_logic)

Usually, there was a very brief treatment on set theory 
in the form of Venn diagram, before one got to **Logic**. 
The emphasis was on how to perform the following binary operations 
on a truth table containing true and false values. 
There had not been a topic on **statement** (nor **open sentence**).  

1. AND operation ($$\wedge$$)
1. OR operation ($$\lor$$)
1. NO operation ($$\neg$$) 
1. [IMPLY operation](https://en.wikipedia.org/wiki/Material_conditional) ($$\to$$) 
1. [EQUIVALENCE operation](https://en.wikipedia.org/wiki/If_and_only_if) ($$\leftrightarrow$$) 

It would have been more helpful if, 
in conjunction with **IMPLY** and **EQUIVALENCE** operation, 
the notion of **statement**, and **open sentence** had been taught. 

## AND, and OR operation in relation to quantified statement

After learning of the quantified statement concept, 
that is [**for all**](https://en.wikipedia.org/wiki/Universal_quantification) statement, 
and [**there exists**](https://en.wikipedia.org/wiki/Existential_quantification) statement, it becomes clear that they correspond to AND, and OR operation respectively

### Similarity between AND operation ($$ \wedge $$) and universal quantification ($$ \forall $$)
* **AND operation** <u>will be TRUE when all things are TRUE</u>, 
otherwise FALSE
* A **universally-quantified** statement <u>will hold (be TRUE)</u> 
when all statements within are TRUE, otherwise FALSE

We may, for example, be interested in the following four statements 
* $$P(8, 4)$$ as a statement saying $$8$$ is a multiple of $$4$$ 
* $$P(16, 4)$$ as a statement saying $$16$$ is a multiple of $$4$$ 
* $$P(32, 4)$$ as a statement saying $$32$$ is a multiple of $$4$$ 
* $$\color{red}{P(33, 4)} $$ as a statement saying $$33$$ is a multiple of $$4$$ 

Of course the last statement, $$ \color{red}{P(33, 4)} $$, is FALSE. 

We are then interested in capturing them all in one expression
(i.e. not a complete statement yet). 
It would be easier to define a new set $$ P_4 $$ for this purpose. 

Let $$ P_4 $$ be the set of certain multiples of $$ 4 $$. 

Notice that we say *certain multiples* of $$ 4 $$, 
because we are not interested in *all multiples* of $$ 4 $$ 
in this brief discussion. 

We can then rearrange the earlier four statements as follows
* $$ 8 $$ is a member of set $$ P_4 $$
* $$ 16 $$ is a member of set $$ P_4 $$
* $$ 32 $$ is a member of set $$ P_4 $$
* $$ 33 $$ is a member of set $$ P_4 $$ (again this should obviously be FALSE)

or in symbolic form
* $$ 8 \in P_4 $$ &nbsp;
* $$ 16 \in P_4 $$ &nbsp;
* $$ 32 \in P_4 $$ &nbsp;
* $$ \color{red}{33 \in P_4} $$ &nbsp; (again this is clearly FALSE)

Now if we line up these four individual statements using $$ \wedge $$ operator,
we get the following

$$ (8 \in P_4) \wedge (16 \in P_4) \wedge (32 \in P_4) \wedge (\color{red}{33 \in P_4}) $$ 

Obviously the presence of the last expression
makes the entire expression evaluates to FALSE.
It should have been $$ 33 \not\in P_4 $$ instead. 
This is what makes the **AND operation** useful and easy to reason with, 
it will only be TRUE when everything
is TRUE. Once it has FALSE statement within it,
the entire expression becomes FALSE.

So the only way for the AND-chained expression earlier to be TRUE
is only the following 

$$ (8 \in P_4) \wedge (16 \in P_4) \wedge (32 \in P_4) $$ 

We now direct our attention to universally-quantified statement,
the one where we use symbol $$ \forall $$.  

For that, we first need to create an *ancillary set* of four elements
that we have been dealing with in this discussion so far, 
$$ \{8, 16, 32, 33\} $$, 
and we want to be able to say a higher-level conclusion 
about this ancillary set in relation with the set $$ P_4 $$ 

In natural language, we want to be able to say, 

|For all elements of the ancillary set, the elements are multiples of four|

In symbolic form, 
we would like the universally-quantified statement candidate
that may look like the following. Though the following is FALSE 

| $$ \forall x \in \{8, 16, 32, \color{red}{33} \}, x \in P_4 $$ | 

That $$ \forall $$ statement **does not hold**, 
because $$ 33 $$ is in the ancillary set. We only want the set
to contain multiples of $$ 4 $$ only, but $$ 33 $$ 
is not a multiple of $$ 4 $$.

The universally-quantified statement that holds, in symbolic form, would be

| $$ \forall x \in \{8, 16, 32\}, x \in P_4 $$ |  

We just have to take $$ 33 $$ out of the ancillary set, 
leaving $$ \{8, 16, 32\} $$.  

As an aside, symbolic form is a useful way 
to create a statement in Mathematics.
It can give so much information symbolically. 
Other mathematically-inclined people who see 
a statement in symbolic form,
may proceed to prove that the statement holds. 
Or disprove it by showing it does not hold. 
If a statement already holds,
depending on how useful or interesting the statement is, 
it can be considered a theorem. 
More people are welcome to derive more statements 
using the theorem.  

### Similarity between OR operation ($$ \lor $$) and existential quantification ($$ \exists $$) 
* **OR operation** <u>will remain TRUE</u> 
in the presence of at least one thing being TRUE. 
* An **existentially-quantified** statement <u>will hold (remains TRUE)</u>
when at least one statement within is TRUE, otherwise FALSE

The only way for it to be false is when all things are FALSE. 
In all likelihood, it almost always evaluates to TRUE. 
Another way to put it
* **OR operation** will only be FALSE when everything within is FALSE
* An **existentially-quantified** statement will not hold (be FALSE) if 
everything within does not hold (every inner statement is FALSE) 

This is somewhat what makes so much sense when I think about it. 
The whole point of **AND statement** (and the **universally-quantified** statement) 
is to recognize the idea that
there is only <u>one way to obtain TRUE value</u>. 
After combining many smaller things,
each smaller thing must be TRUE.
It is such a strong statement, 
that you need to put in so much effort to prove 
everything within it. If someone shows just one example
of a smaller thing being FALSE, 
then the entire statement fails. 

**OR operation** (and an **existentially-quantified** statement) 
works in a similar way. You can call the **OR operation** result FALSE 
if you can granularly evaluate all the expressions/statements within 
as FALSE. It may sometimes be easier just to prove one thing 
inside the chained-expressions within an **OR operation** as TRUE, 
then you can call the entire thing TRUE. 

Coming back to our ancillary set example earlier, 
we now would like to say the following in natural language

| There exists an element in the ancillary set such that it is a multiple of four |

The existantially-quantified statement would be

| $$ \exists x \in \{8, 16, 32, \color{red}{33}\}, x \in P_4 $$ |

Indeed, we do not have to take $$ \color{red}{33} $$ 
out of the ancillary set, because the presence of $$ 8 $$ alone
is already enough to make the entire existentially-quantified statement
to hold.  

We can even throw a multiple of seven, $$ 14 $$, into the 
ancillary set, and this existentially-quantified statement
will still hold 

| $$ \exists x \in \{8, 16, 32, \color{red}{33}, \color{red}{14}\}, x \in P_4 $$ |


