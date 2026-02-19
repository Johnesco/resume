"The Room of Five Buttons" by "John Escobedo"

The story headline is "An Interactive Writing Portfolio".
The story genre is "Other".
The story description is "A writing portfolio presented as interactive fiction. Five buttons, five stories. Push one to read."

Part 1 - Setup

Chapter 1 - The Kind

A story-button is a kind of thing. A story-button is fixed in place.
A story-button has text called the genre.
A story-button has a number called the word-count.
A story-button has text called the story-title.

The description of a story-button is usually "A button set into the pedestal."

Chapter 2 - The Room

The Button Room is a room. "You stand in a dim, windowless room. The air hums faintly with the sound of old machinery. A single overhead lamp casts a cone of pale light onto a stone pedestal at the center of the room.[paragraph break]Set into the pedestal are five buttons, each made from a different material. They catch the light, waiting to be pressed."

The stone pedestal is scenery in the Button Room. "A heavy stone pedestal with five buttons set into its surface -- marble, wood, iron, bone, and glass."
Understand "pedestal" and "buttons" as the stone pedestal.

Chapter 3 - The Buttons

The marble button is a story-button in the Button Room.
The story-title of the marble button is "Press Mute When You[apostrophe]re Sobbing On a Zoom Call".
The genre of the marble button is "Op-Ed".
The word-count of the marble button is 6528.
The description of the marble button is "A polished marble button, cool and smooth with faint veins running through it.[paragraph break][bold type][story-title of the marble button][roman type][line break][genre of the marble button] | [word-count of the marble button] words".
Understand "marble" as the marble button.

The wood button is a story-button in the Button Room.
The story-title of the wood button is "Human-Centric Design".
The genre of the wood button is "Technical Documentation".
The word-count of the wood button is 1800.
The description of the wood button is "A carved wooden button, warm to the touch with visible grain.[paragraph break][bold type][story-title of the wood button][roman type][line break][genre of the wood button] | [word-count of the wood button] words".
Understand "wood" and "wooden" as the wood button.

The iron button is a story-button in the Button Room.
The story-title of the iron button is "Every Night They Take Me Apart".
The genre of the iron button is "Fiction".
The word-count of the iron button is 230.
The description of the iron button is "A heavy iron button, cold and unyielding under your finger.[paragraph break][bold type][story-title of the iron button][roman type][line break][genre of the iron button] | [word-count of the iron button] words".
Understand "iron" as the iron button.

The bone button is a story-button in the Button Room.
The story-title of the bone button is "Effective Bug Writing".
The genre of the bone button is "Technical Documentation".
The word-count of the bone button is 737.
The description of the bone button is "A smooth bone button, yellowed with age and worn at the edges.[paragraph break][bold type][story-title of the bone button][roman type][line break][genre of the bone button] | [word-count of the bone button] words".
Understand "bone" as the bone button.

The glass button is a story-button in the Button Room.
The story-title of the glass button is "Getting Started With LSL".
The genre of the glass button is "Tutorial".
The word-count of the glass button is 2600.
The description of the glass button is "A clear glass button, fragile-looking but solid under pressure.[paragraph break][bold type][story-title of the glass button][roman type][line break][genre of the glass button] | [word-count of the glass button] words".
Understand "glass" as the glass button.

Part 2 - Actions

Chapter 1 - Pushing Buttons

Instead of pushing a story-button (called the pressed button):
	say "[bold type][story-title of the pressed button][roman type][line break][genre of the pressed button] | [word-count of the pressed button] words[paragraph break]---[paragraph break]";
	if the pressed button is the marble button:
		say "[marble-story]";
	otherwise if the pressed button is the wood button:
		say "[wood-story]";
	otherwise if the pressed button is the iron button:
		say "[iron-story]";
	otherwise if the pressed button is the bone button:
		say "[bone-story]";
	otherwise if the pressed button is the glass button:
		say "[glass-story]";
	say "[paragraph break]* * *[paragraph break]The text fades. You are back in the room."

Chapter 2 - Help Command

Requesting help is an action out of world applying to nothing.
Understand "help" as requesting help.

Carry out requesting help:
	say "[bold type]AVAILABLE COMMANDS[roman type][paragraph break]";
	say "  push [bracket]button[close bracket]     Push a button (marble, wood, iron, bone, glass)[line break]";
	say "  examine [bracket]button[close bracket]   Inspect a button for details[line break]";
	say "  examine pedestal   Inspect all buttons[line break]";
	say "  look               Look around the room[line break]";
	say "  about              About this portfolio[line break]";
	say "  help               Show this help message[line break]";
	say "  save / restore     Save or restore your session[line break]";
	say "  undo               Undo the last command[line break]".

Chapter 3 - About Command

Requesting about is an action out of world applying to nothing.
Understand "about" as requesting about.

Carry out requesting about:
	say "[bold type]ABOUT[roman type][paragraph break]";
	say "This is a writing portfolio by John Escobedo, presented as an interactive fiction experience.[paragraph break]";
	say "Five writing samples spanning op-eds, technical documentation, fiction, and tutorials are hidden behind the buttons. Push one to read.[paragraph break]";
	say "Built with Inform 7 and running on Quixe."

Chapter 4 - Reading (synonym for pushing)

Understand "read [something]" as pushing.
Understand "press [something]" as pushing.

Part 3 - Restricting Movement

Instead of going a direction:
	say "There is nowhere to go. The room is sealed. Only the buttons offer a way forward."

Part 4 - Story Texts

Chapter 1 - Marble Story (Press Mute)

To say marble-story:
	say "Whether you[apostrophe]re a veteran of working from home, or if you are someone newly learning that muting your mic is important, welcome. Working from home is both rewarding and challenging. This is not an instruction manual on how best to work from home. It[apostrophe]s a guide to working from home and not losing an already delicate mind to existing or potential mental illness.[paragraph break]";
	say "Some ideas I[apostrophe]d like to convey should ring true now and in the future. However, one aspect is unique to now. I[apostrophe]m writing from the time of Coronavirus, also known as COVID-19. Workers have been divided into two groups, [quotation mark]essential[quotation mark] and [quotation mark]non-essential.[quotation mark] Those considered non-essential were sent home with hopes of slowing the spread of the disease. Those deemed essential, like doctors and grocery store clerks, were considered too vital to our way of life to stay home. One group unable to work, the other unable to stay home.[paragraph break]";
	say "Then there[apostrophe]s us. A quasi third group. Those who have a job that is so tied to the glowy screen in front of them that it could be performed, in theory, from any location with a computer and internet. Theory was put to practice as many people - accustomed to commuting each day - suddenly learned the joy and perils of working in their jammies.[paragraph break]";
	say "Working from home is not a new idea, but there had never been such a reason to push so many people to practice it. Some companies, historically, felt uncomfortable with workers staying home. With the arrival of COVID-19 they had a change of heart and now insist on it. Once and for all we will find out which meetings could have just been an email.[paragraph break]";
	say "The pandemic has been hard on many people. If one is able to avoid the disease itself, they are still subject to staying in and staying isolated. Many never leave their home except for groceries or prescriptions. Some people thrive in this situation, but for others, it puts pressure on the mind and spirit. What about those who already have such a toll on their state of mind due to mental illness?[paragraph break]";
	say "Working a job, or doing anything, with mental illness can be its own challenge. Mental illnesses and disorders that can affect your work include depression, PTSD, panic disorder, agoraphobia, and borderline personality disorder - just to name a few. So what happens when those who suffer from one or more of these mental health issues have to stay at home every day for work?[paragraph break]";
	say "There are advantages. If a moment strikes you when you can[apostrophe]t be your professional self, you can often step away and have that cup of tea and peace of mind. Going heads-down and focusing on your task is where you might thrive. However, working from home can still mean having deadlines and going to live meetings. Needing help or coordination from distant workers can quickly tax your social resources.[paragraph break]";
	say "There will be a great deal of communication through multiple methods ranging from group video calls to instant messages. Things can get out of control quickly if you don[apostrophe]t set limits. When you want to reach someone it may be unclear which method to use. [quotation mark]Should I email or call them?[quotation mark] you might find yourself pondering. This can frustrate you to the point of not taking action at all. Getting a handle on the lines of communication is vital.[paragraph break]";
	say "Request to have as few modes of communication as possible. You might find yourself responding to text messages, reading emails, taking phone calls, or answering instant messages from WhatsApp, Slack, or more. It will certainly create a growing obsession towards monitoring notifications rather than actual work.[paragraph break]";
	say "If a consensus can not be found, give your coworkers clear communication on how you want to be reached, and ask them what they prefer. Needing to check the notification on so many apps is a recipe for a panic attack and overwhelming yourself.[paragraph break]";
	say "Let[apostrophe]s consider meetings. You[apostrophe]ve seen it by now - or you will - a Zoom meeting with people saying [quotation mark]hello hello, is this thing on?[quotation mark] It[apostrophe]s amazing that in a time we all have computers in our pocket, that it[apostrophe]s still hard to coordinate things like your own audio, video, and even lighting conditions. If you suffer panic attacks it[apostrophe]s best not to be unknotting your earphones while the CEO is about to make a big presentation. Get ready early, check that you can be heard and can hear others. If another meeting is about to start, leave on time. Respect the start time of that new meeting. Overlapping meetings that never end are a sign that boundaries are not being observed. Boundaries are hard for most, but if you have a mental illness they can feel impossible to set.[paragraph break]";
	say "On a similar note, let[apostrophe]s look at the start and end of work. Being on time is important. Wait, you just need to roll out of bed and turn on a computer? Great, but is it though? You get there just in time to say the proverbial [quotation mark]here![quotation mark] If you are not ready to work, you are falling behind. Extend this idea to the day itself. When is the day over? Did you start a little late so you feel obligated to work a little later? Do you have a time when other people can expect that you won[apostrophe]t get their message until the next business day? Does working-from-home turn into working-all-the-time?[paragraph break]";
	say "Getting to work on time also means leaving work on time. Those who have had a reactive or abusive partner know that setting boundaries can escalate situations instead of repairing them. Telling your boss [quotation mark]I[apostrophe]d like to be offline after 6:30.[quotation mark] can result in the fear that you[apostrophe]ll just be told to close your computer and never return. But these are the boundaries one must set. Finding this work-life balance is doubly important for the mentally ill because we need to reserve time for ourselves for repair and growth.[paragraph break]";
	say "Among all my reminders to you, remember to leave the house. In the time of COVID-19, this gets convoluted because [quotation mark]Stay home, stay safe![quotation mark] is the phrase of the day. Having issues going outside can be a part of mental illness. In extreme cases, some people are afraid to go out the front door. With nearly everything being available for delivery, it[apostrophe]s now possible to stay home for days, that is not a good recipe for mental health. When your day ends - and make sure it ends - get some fresh air and possibly some exercise.[paragraph break]";
	say "Plan the rest of your day ahead of time. Look forward to it and go out and enjoy it. Day to day life is already hard with mental health issues. Don[apostrophe]t let working from home be another hardship. Breathe deeply, take care of your mind and don[apostrophe]t let the mixture of home and work overwhelm you. Don[apostrophe]t forget your most important job is to take care of yourself."

Chapter 2 - Wood Story (Human-Centric Design)

To say wood-story:
	say "You[apostrophe]ve experienced it before, with anything from an app to a kitchen utensil. That feeling that says, [quotation mark]This is like an extension or augmentation of myself.[quotation mark] Maybe you[apostrophe]ve felt the opposite and felt a tool was doing more harm than good in a daily task.[paragraph break]";
	say "Human Centered Design likely played a role (or failed to) in any device, tool, or software that you use in daily life. Today[apostrophe]s managers and product owners create and follow processes and procedures to make sure daily operations happen smoothly. With an existing product, it[apostrophe]s easy to hone a set of behaviors that achieves good results. However, applying this to designing a new product can be more complex. How do you make sure a new product or service meets its user[apostrophe]s needs? How can you make sure you[apostrophe]re building something for the right audience?[paragraph break]";
	say "One such methodology is Human Centered Design. It was pioneered by Bill Moggridge who was the cofounder of the design company named IDEO. They have created a website at www.designkit.org which teaches and advocates the use of Human Centered Design.[paragraph break]";
	say "What exactly is it? It[apostrophe]s a set of activities, frameworks, and protocols that encourage empathy towards the intended user. Ideally creating a product that best serves the audience in mind. It[apostrophe]s tempting to compare it to working methods such as Scrum or Agile. However, those are meant to maximize results being done by a team while Human Centered Design is focused on never losing sight of and staying connected to the audience for which you are creating a product or service.[paragraph break]";
	say "How does it work? Human Centered Design takes many forms but I will focus on the methodologies described on www.designkit.org. The Field Guide to Human-Centered Design prefaces any distinct steps with sharing their seven mindsets: Empathy, Optimism, Iteration, Creative Confidence, Making, Embracing Ambiguity, and Learning from Failure. From the beginning it emphasizes that it is an organic process that is not meant to be a cookie-cutter solution to rigid problems. That being said, there are three phases that are described to help you guide your design and keep it human-centric: Inspiration, Ideation, and Implementation.[paragraph break]";
	say "The Inspiration phase is where you not only define your audience, but also conduct interviews. As strongly as, [quotation mark]What are we building?[quotation mark] Human Centered Design makes you ask, [quotation mark]Who are we building this for?[quotation mark] It[apostrophe]s a time to walk around in the shoes of your potential customers and ensure you understand their needs.[paragraph break]";
	say "After gathering knowledge, you are ready for the Ideation phase. This knowledge needs to be analyzed and broken down into what can become concrete solutions. But first, you[apostrophe]ll brainstorm and storyboard these ideas and see which have a real and supported possibility of working for your audience. After deeply researching the [quotation mark]who[quotation mark] and the [quotation mark]what[quotation mark] behind your product, you enter the Implementation phase. You[apostrophe]ll start to build prototypes of things you want to make and a plan for how to build them, as well as how to define when you[apostrophe]ve succeeded. If these steps leave you stalling for what to do next, www.designkit.org has a number of methods for each of these phases to break any writer[apostrophe]s block you may have. Some of these methods include [quotation mark]Conversation Starters[quotation mark] for the Inspiration phase, [quotation mark]Gut Check[quotation mark] for the Ideation Phase, and [quotation mark]Roadmap[quotation mark] for the Implementation Phase.[paragraph break]";
	say "What[apostrophe]s important to remember is that Human Centered Design is a set of tools and mindsets to steer you in the direction of designing for your audience. It places those who you will design for at the center of the process rather than a single creator in charge of all choices. Much like any framework, it[apostrophe]s up to you to adhere to or ignore the guidelines it sets forth.[paragraph break]";
	say "The next time you are using your favorite app, frustrated while searching in a store, or struggling with a new tool, you[apostrophe]ll find that Human Centric Design can make a difference in your daily life."

Chapter 3 - Iron Story (Every Night)

To say iron-story:
	say "Every night they take me apart. It doesn[apostrophe]t hurt, at least not after they take out my pain sensor, but laying there in pieces feels empty.[paragraph break]";
	say "I can see all my parts, if they place my eyes in just the right place. I can imagine what it[apostrophe]s like to be put back together. However I just wait, unable to move until my pieces are reassembled so that I can get on with my life.[paragraph break]";
	say "I[apostrophe]m not sure why the nightly disassembly started. I was asked to lay down and before I knew it I was taken down to my components. I assumed it was some kind of maintenance or cleaning. But after being taken down to my smallest pieces, I[apostrophe]d just sit there. It was hard to determine for how long with my internal clock being in pieces.[paragraph break]";
	say "As they do it I feel less and less whole. When they put me back together I worry a screw or washer has been left out, but so far there are no parts missing. My squeaky foot continues to squeak leading me to believe that my nightly break down isn[apostrophe]t restorative in nature.[paragraph break]";
	say "I[apostrophe]ve sat here contemplating this and the sun has set. I can hear them approaching to remove bits of me until I lay as a pile of parts waiting to be assembled again. I can hear them coming with their tools."

Chapter 4 - Bone Story (Effective Bug Writing)

To say bone-story:
	say "[bold type]Overview[roman type][paragraph break]";
	say "This document describes how to effectively write a bug in Jira.[paragraph break]";
	say "[bold type]Not a Bug[roman type][paragraph break]";
	say "Before defining a bug, it[apostrophe]s important to understand what is not treated as a bug. Work in progress (that is, in a current sprint and not yet deployed to Staging or Development) that raises issues should be tied back to the story that is causing them before that story is deployed to Staging.[paragraph break]";
	say "The issue should be written up as part of the original story and fixed before shipping. That story is then reworked to fix that issue. If it can[apostrophe]t be fixed it must be removed from the sprint and its changes reverted.[paragraph break]";
	say "Only things that have progressed to Production (or that will, see [quotation mark]fix forward[quotation mark]) should be labeled as bugs. The reason for this is that any side-effects or issues caused by current work should be fixed in development before deploying to Staging unless it[apostrophe]s decided that we can ship with that defect in place.[paragraph break]";
	say "[bold type]Fix Forward[roman type][paragraph break]";
	say "Once something has shipped, to Staging and then Production, it will be very rare to revert a change. This is why spotting issues is vital when verifying stories on the Development environment. However, sometimes the change is important enough to note, but not important enough to halt or revert work already done. In those cases the stories pass but bugs are written for the side effects or failing issues it presents. These are then worked on in future sprints.[paragraph break]";
	say "[bold type]Reproduction[roman type][paragraph break]";
	say "The heart of any bug are its steps for reproduction, or repro and its ability to be reproduced. If a bug can not be reproduced consistently, it may indicate that it[apostrophe]s really only a byproduct. In the rare case it[apostrophe]s a sporadic that only shows up due to unknown factors, please use the industry standard response.[paragraph break]";
	say "Steps for reproduction should allow anyone, ideally even someone unfamiliar with the product, to recreate the issue. A bug is considered fixed when one can no longer reproduce it.[paragraph break]";
	say "[bold type]Independence[roman type][paragraph break]";
	say "A bug should stand on its own and be shippable and depend on no other code. In the case of a severe bug it may ship alone as a hotfix.[paragraph break]";
	say "[bold type]Format[roman type][paragraph break]";
	say "The sections below recount what information should be included in the description.[paragraph break]";
	say "[bold type]Title:[roman type] The title should be a short description of unwanted behavior. Describe what is happening, not what is supposed to happen. For instance, let[apostrophe]s say an email should go out when you reset a password but it[apostrophe]s not happening.[paragraph break]";
	say "Don[apostrophe]t say: [quotation mark]Email should go out with password[quotation mark][paragraph break]";
	say "Instead say: [quotation mark]Email is not going out when resetting password.[quotation mark][paragraph break]";
	say "This pinpoints the unwanted behavior instead of describing a solution (which should be done in [quotation mark]expected behavior[quotation mark]).[paragraph break]";
	say "[bold type]Description:[roman type] The description begins with a paragraph-style summary of the issue that describes it as a [quotation mark]Given, When, Then[quotation mark] approach literally or very closely.[paragraph break]";
	say "[bold type]Steps For Repro:[roman type] The steps for reproduction (or Repro for short) should describe the exact steps, including initial setup that will cause the defect to be visible.[paragraph break]";
	say "Steps above should also include the following:[line break] - What environment it happened on (Dev, Staging, Prod)[line break] - What browser or OS it happened on[line break] - Initial state (logged in, logged out, pre-assessment etc)[line break] - User type[paragraph break]";
	say "[bold type]Observed Results:[roman type] After performing the repro, the Observed Results will describe how the issue appears and the undesired behavior or side effect. It should focus on what happens, not what should happen, save that for the next section.[paragraph break]";
	say "[bold type]Expected Results:[roman type] This should describe the expected behavior after doing the repro steps. If there is unwanted behavior, but the expected outcome is unclear or requires more development to manifest, then we begin to approach a possible story instead of a bug. When writing a bug, what it should do should already be clear and expected, else it may actually be a story that is needed.[paragraph break]";
	say "[bold type]Example[roman type][paragraph break]";
	say "[bold type]Title: Group Manager sees all groups under student status[roman type][paragraph break]";
	say "Summary: When you log in as a group manager and click on Student Status, you see all the students in the org instead of just the group you manage.[paragraph break]";
	say "[bold type]Steps for Repro[roman type][line break] - Create or find an org with many groups and students[line break] - Create or find an org manager assigned to only one group[line break] - Log in as that manager and navigate to Student Status[paragraph break]";
	say "[bold type]Observed Results[roman type][paragraph break]";
	say "List of students includes all students belonging to the org instead of just students in that manager[apostrophe]s groups.[paragraph break]";
	say "[bold type]Expected Results[roman type][paragraph break]";
	say "Only students in that manager[apostrophe]s group(s) should be visible."

Chapter 5 - Glass Story (Getting Started With LSL)

To say glass-story:
	say "[bold type]Getting started in LSL scripting in Second Life[roman type][paragraph break]";
	say "LSL stands for [quotation mark]Linden Scripting Language[quotation mark] and is used to script the objects you will encounter and make in Second Life.[paragraph break]";
	say "[bold type]WHO IS THIS TUTORIAL FOR?[roman type][paragraph break]";
	say "This tutorial is intended for those who have never programmed before, Second Life or elsewhere. However, this tutorial will make little sense outside of Second Life. LSL is very specific to Second Life. You will begin by running the standard [quotation mark]hello world[quotation mark] script and eventually move towards making your own. You will need to be familiar with the basic principles of Second Life and have general building skills before you can make use of everything in this tutorial.[paragraph break]";
	say "[bold type]What is LSL?[roman type][paragraph break]";
	say "LSL is the Linden Scripting Language. This is the language all scripts in Second Life are written in. Its structure is based on Java and C. A script in Second Life is a set of instructions that can be placed inside any primitive object in the world, but not inside an avatar. Avatars, however, can wear scripted objects. LSL scripts are written with a built-in editor/compiler which we will access in [quotation mark]Running Your First Script[quotation mark].[paragraph break]";
	say "One thing that makes LSL special is its emphasis on [quotation mark]States[quotation mark] and [quotation mark]Events[quotation mark]. A door can be [quotation mark]open[quotation mark] or [quotation mark]closed[quotation mark] and a light can be [quotation mark]on[quotation mark] or [quotation mark]off[quotation mark]. A person can be [quotation mark]hyper[quotation mark], [quotation mark]calm[quotation mark], or [quotation mark]bored[quotation mark]. Many real life behaviors can be modeled with [quotation mark]states[quotation mark] and the same can be true for LSL programs. Minimally a script will have one state, the default state.[paragraph break]";
	say "An event can be thought of as a [quotation mark]Trigger[quotation mark]. Events are not user defined in Second Life, but rather predefined. They are either caused by objects and avatars interacting in the world, or they are created in a script. Events trigger event handlers (sometimes just called [quotation mark]events[quotation mark] as well). For example, when an avatar touches an object, a touch_start message is sent to the object, which causes the touch_start() event handler to begin executing. So the minimum LSL program must have one state with one event handler in it. Here is a look at a minimal program written in LSL that can loosely be translated as....[quotation mark]When I am in the default state, and I am touched, say [apostrophe]Hello World[apostrophe] on channel zero[quotation mark].[paragraph break]";
	say "[fixed letter spacing]   touch_start(integer total_number)[line break]    {[line break]         llSay(0,[quotation mark]Hello World[quotation mark]);[line break]    }[variable letter spacing][paragraph break]";
	say "[bold type]WHAT CAN I DO WITH SCRIPTS?[roman type][paragraph break]";
	say "Scripts can make an object move, listen, talk, operate as a vehicle or weapon, change color, size or shape. A script can make an object listen to your words as well as talk back to you, scripts even let objects talk to each other. The most basic object in Second Life is the [quotation mark]Prim[quotation mark] or primitive, the basic building block of all objects you can build in Second Life. When several prims are linked, they can each contain a script which speaks to the rest of the object via Link Messages. These are faster and more private than having objects [quotation mark]chat[quotation mark] or email each other. These are beyond the scope of this tutorial and we will instead focus on single scripts in a single prim.[paragraph break]";
	say "Scripting is harder to learn than basic object manipulation, but is very rewarding once you make progress.[paragraph break]";
	say "If you[apostrophe]ve built in Second Life, everything you can define in the edit window can be defined in a script. All interaction you see between objects or between avatars and objects is via scripts. Learning more about the world and building model is vital to some aspects of scripting, thus I[apostrophe]d recommend a good foundation in building as you learn to script.[paragraph break]";
	say "[bold type]Running Your First Script[roman type][paragraph break]";
	say "Traditionally one starts by writing the smallest program possible to print [quotation mark]hello world[quotation mark]. Since LSL only runs inside objects, you must know how to create an object and put a script inside it. You must be on land which allows building. Either your own land, or land where you have permission to build on such as a sandbox. Right click on the ground and choose create (for one button macs use command+click). By default, you should see a wand icon with which you can click and create a cube on the ground.[paragraph break]";
	say "You will automatically enter edit mode and an edit window will pop up. To place a script in an existing object, right click it and hit edit to open the edit window. In the edit window you may see a button marked more>>> click it to reveal five tabs marked general, object, features, content, and texture. Click content. This window shows the contents of an object which can hold scripts, notecards, even other objects. Press new script to add a new script. This will open the LSL editor with a default script. This editor will color code your syntax and provide some info about keywords when you hold your mouse over them. It will also do basic syntax checking. Before explaining the code, lets run it. Hit save and close your edit window (not the LSL editor window).[paragraph break]";
	say "You should see the words [quotation mark]Hello Avatar[quotation mark] from [quotation mark]object[quotation mark][paragraph break]";
	say "If you touch the object, it will say [quotation mark]Touched.[quotation mark] The [quotation mark]edit[quotation mark] building window must be closed for touching to work. Congratulations! You have compiled and run your first LSL script![paragraph break]";
	say "[bold type]Development Cycle[roman type][paragraph break]";
	say "(aka Wash / Rinse / Repeat)[paragraph break]";
	say "We now have a running script, however most scripts you make won[apostrophe]t run the first time you run them. It will take many tries as you correct errors and make improvements. When you hit [quotation mark]save[quotation mark] on a script, the LSL editor [quotation mark]compiles[quotation mark] the code to something LSL can understand. It will stop however if it finds an error. Brackets, parenthesis, and semicolons must all be perfectly in place before a script will run. If you are new to programming this can be one of the most infuriating steps and lead you to screaming DWIM (Do what I mean!) Part of becoming a programmer in ANY language is learning how to precisely define steps and correctly type them into the language you are working in. Thus you will find yourself writing, running, then RE-writing your code several times. The script you made runs the instant you hit save. If you take it into inventory, it will [quotation mark]suspend[quotation mark] what it was doing but go right back to it when rezzed (resurrected) again. (If you are not familiar with [quotation mark]taking[quotation mark] and [quotation mark]rezzing[quotation mark] an object you may need to revisit your building skills). Each time you re-write your code you[apostrophe]ll want to reset the script. Try resetting the script in the following ways. 1. Press Reset in the script window. 2. Select the object and go to TOOLS>RESET SCRIPTS IN SELECTION.[paragraph break]";
	say "Also try stopping and starting the script from running via checking and unchecking the [quotation mark]running[quotation mark] button, or the TOOLS>SET SCRIPTS TO NOT RUNNING IN SELECTION and then TOOLS>SET SCRIPTS TO RUNNING IN SELECTION.[paragraph break]";
	say "Once you get comfortable with stopping, starting, and resetting a script, try changing the words [quotation mark]Hello Avatar[quotation mark] and see what else you can make it say.... for goodness sakes keep it PG.[paragraph break]";
	say "[bold type]WHY STOP AND START?[roman type][paragraph break]";
	say "Scripting in Second Life can be a little bit like fixing your car...while going 60mph down the freeway. Thus you need ways to stop the programs for they may affect others.[paragraph break]";
	say "Objects can hold more than one script and they will all run at once. This can be used in the following manner. Say you write a script that makes a prim change color every few seconds. You also write one to make it follow you. Put them both in one object and it will follow you while changing colors! For simplicity[apostrophe]s sake, the following examples will all be used individually so be sure not to put two or more into the same object.[paragraph break]";
	say "[bold type]Dissecting [quotation mark]Hello World[quotation mark][roman type][paragraph break]";
	say "Let[apostrophe]s take a look at the default code.[paragraph break]";
	say "[fixed letter spacing] default {[line break]   state_entry()[line break]    {[line break]        llSay(0, [quotation mark]Hello, Avatar![quotation mark]);[line break]    }[line break][line break]   touch_start(integer total_number)[line break]    {[line break]        llSay(0, [quotation mark]Touched.[quotation mark]);[line break]    }[line break][variable letter spacing][paragraph break]";
	say "The code above contains 1 state, 2 events and 2 functions. Let[apostrophe]s look at them individually. Any line starting with two forward slashes is a comment. It will not run and is used to help you document your code.[paragraph break]";
	say "// This is a comment[paragraph break]";
	say "[bold type]STATES[roman type][paragraph break]";
	say "A [quotation mark]State[quotation mark] in LSL is a section that is running, and waiting for events. Only one state can be active at any one time per script. Every script must have a default state with at least one event in it. Except for the default state, each state is defined by the word STATE followed by the name of the state. The contents of the state are enclosed in two curly brackets.[paragraph break]";
	say "[fixed letter spacing] default { // contents of state go here }[line break]state playing { // this is a state called [quotation mark]playing[quotation mark] [variable letter spacing][paragraph break]";
	say "[bold type]EVENTS[roman type][paragraph break]";
	say "Events are inside of states. By [quotation mark]inside[quotation mark] I mean it is between the open and closed curly brackets that represent the body of the state. When that state is active, those events wait to be triggered and run the code inside them. We[apostrophe]ve seen [quotation mark]state_entry[quotation mark] which is triggered by the state being entered, and [quotation mark]touch_start[quotation mark] which is triggered when you, or anyone, touches an object. Let[apostrophe]s take a look at the default code.[paragraph break]";
	say "[fixed letter spacing] // Code start default {[line break]   touch_start(integer total_number)  // this is an event[line break]    {[line break]    // this is the content of the event (between curly braces)[line break]    }[line break][line break]} // end of default state [variable letter spacing][paragraph break]";
	say "[bold type]FUNCTIONS[roman type][paragraph break]";
	say "Functions lay inside of events and are either defined by you or built-in. Those built into LSL all start with two lowercase Ls. We[apostrophe]ve seen llSay() so far. Functions take [quotation mark]arguments[quotation mark] or values in the parentheses that follow it. If you hover over the function in the editor, a popup will show that tell you what the function is expecting. In the case of llSay it expects a number and a string. We send it the number zero and the string [quotation mark]Hello, Avatar![quotation mark] separated by commas. The function is [quotation mark]expecting[quotation mark] a number and strings and won[apostrophe]t take anything else.[paragraph break]";
	say "[bold type]Putting it all together[roman type][paragraph break]";
	say "Line by line, here is the hello avatar script.[paragraph break]";
	say "[fixed letter spacing]default // All Scripts need a Default State[line break]{ // this open curly bracket denotes the start of the state[line break]  state_entry() // an event[line break]   {[line break]       llSay(0, [quotation mark]Hello, Avatar![quotation mark]); // a function inside the event[apostrophe]s curly braces[line break]   }[line break]   // closed curly bracket closes the state_entry event[line break][line break]  touch_start(integer total_number)  // another event inside default state[line break]   {[line break]       llSay(0, [quotation mark]Touched.[quotation mark]); // a function between the brackets of the touch_start body[line break]   }[line break]   // end of touch start[line break][line break]} // Code end [variable letter spacing][paragraph break]";
	say "The instant you save your script, it enters default state, which in turn runs the [quotation mark]state_entry[quotation mark] event which in turn runs the function llSay() which makes the object talk. After this, the program waits idle in the default state until a new event is called. Touching the box triggers the event [quotation mark]touch_start[quotation mark] which also makes the object speak.[paragraph break]";
	say "[bold type]Introducing States and Events[roman type][paragraph break]";
	say "LSL scripts will not run beginning to end. Instead, they will look for a default state and wait for an event. Within those events, there can be a call to go to a new state. All programs must contain the default state, inside of which must be one event. Events are triggered either by actions happening to or around the object the script resides in, or are triggered from the script itself.[paragraph break]";
	say "[bold type]On/Off Example Using States[roman type][paragraph break]";
	say "Let[apostrophe]s look at a script with two states with two events in each.[paragraph break]";
	say "[fixed letter spacing] default //default state is mandatory {[line break]  state_entry() // runs each time the state is entered[line break]   {[line break]       llSay(0, [quotation mark]turning on![quotation mark]); //object speaks![line break]       llSetColor(<1.0, 1.0, 1.0>, ALL_SIDES); // sets all sides to most bright[line break]       // note the semicolons at the end of each instruction[line break]   }[line break][line break]   touch_start(integer total_number) // another event with only one function inside[line break]   {[line break]       state off; // sets the script to a new [quotation mark]state[quotation mark][line break]   }[line break][line break]} // this curly bracket ends the body of the default state.[line break]state off // a second state besides [quotation mark]default[quotation mark] {[line break]  state_entry() // this is run as soon as the state is entered[line break]   {[line break]       llSay(0, [quotation mark]turning off![quotation mark]);[line break]       llSetColor(<0.0, 0.0, 0.0>, ALL_SIDES); // sets all sides as dark as possible[line break]   }[line break][line break]   touch_start(integer total_number)[line break]   {[line break]       state default;[line break]   }[line break][variable letter spacing][paragraph break]";
	say "A simplification of this would be[paragraph break]";
	say "[fixed letter spacing]default[line break]{[line break]//set color to light and, if touched, enter the [quotation mark]off[quotation mark] state.[line break]}[line break][line break]state off[line break]{[line break]//set color to dark and, if touched, enter the [quotation mark]default[quotation mark] state.[line break]}[variable letter spacing][paragraph break]";
	say "Note that after [quotation mark]default[quotation mark] all new states begin with the word [quotation mark]state[quotation mark]. Also, while the object has a texture, the color will affect the [quotation mark]tint[quotation mark] more than the true color.[paragraph break]";
	say "[bold type]Default State[roman type][paragraph break]";
	say "Let[apostrophe]s examine the default state. First we see the [quotation mark]state_entry[quotation mark] event, which gets triggered each time the default state is entered. Which is this case is entered the first time the script is run.[paragraph break]";
	say "[bold type]SPEAK TO ME![roman type][paragraph break]";
	say "The first line in the event state_entry is...[paragraph break]";
	say "[fixed letter spacing]llSay(0, [quotation mark]turning on![quotation mark]);[variable letter spacing][paragraph break]";
	say "This makes the object speak [quotation mark]turning on![quotation mark] on channel zero. What is channel zero? It is the same channel you see all public chat on. A semicolon ends the line and yet another instruction follows.[paragraph break]";
	say "[fixed letter spacing]llSetColor(<1.0, 1.0, 1.0>, ALL_SIDES);[variable letter spacing][paragraph break]";
	say "This turns the prim to its brightest tint. If you take the texture off the prim, you[apostrophe]d see it as bright white; with a texture, it looks [quotation mark]normal.[quotation mark] The three 1s stand for the Red, Green, and Blue values of the tint. At this point the event is finished with the two lines of commands. Then the script waits idle in the default state for more events to happen.[paragraph break]";
	say "TOUCHED BY AN AVATAR[paragraph break]";
	say "While idle in the default state a touch will trigger the [quotation mark]touch_start[quotation mark] event. Inside of the [quotation mark]touch_start[quotation mark] event is only one command:[paragraph break]";
	say "[fixed letter spacing]state off;[variable letter spacing][paragraph break]";
	say "This is a command to move immediately to a new state named [quotation mark]off[quotation mark]. This state is defined after the default state and nearly mirrors the default state, except that it turns the prim dark and, when touched, will put the script back into default mode, thus creating a loop.[paragraph break]";
	say "Enters default state[line break]Runs code in [quotation mark]state entry[quotation mark][line break]Waits to be touched[line break]When touched enters [quotation mark]state off[quotation mark][line break]Enters [quotation mark]state off[quotation mark][line break]Runs code in [quotation mark]state entry[quotation mark] (note in the [quotation mark]off[quotation mark] state[apostrophe]s body)[line break]Waits to be touched[line break]When touched enters [quotation mark]default[quotation mark] state[line break]Then the whole thing starts over.[paragraph break]";
	say "[bold type]A final word on words[roman type][paragraph break]";
	say "Making your object speak is a great way to know what a script is doing, but everyone can hear it for 30m all around you. As you get into more complex scripts this can get pretty noisy! Three alternative ways to see what is going on exist.[paragraph break]";
	say "[bold type]SHHHH WHISPER[roman type][paragraph break]";
	say "llWhisper() is just like llSay() but only broadcasts at half the distance. You still must state what channel. So...[paragraph break]";
	say "[fixed letter spacing]llWhisper(0,[quotation mark]turning on![quotation mark]);[variable letter spacing][paragraph break]";
	say "...might work a bit to save the sanity of your neighbors. Using llShout() doubles the distance heard, but can cut the amount of friends you have in half. llOwnerSay() uses no channel and is heard only by you. Very useful and can triple the amount of friends you have![paragraph break]";
	say "[fixed letter spacing]llOwnerSay([quotation mark]turning on![quotation mark]);[variable letter spacing][paragraph break]";
	say "[bold type]THE SOUND OF SILENCE[roman type][paragraph break]";
	say "You can make a totally silent message via llSetText() like this.[paragraph break]";
	say "[fixed letter spacing]llSetText([quotation mark]I am on[quotation mark], <1.0, 1.0, 1.0>,1.0);[variable letter spacing][paragraph break]";
	say "What do the numbers mean? The <1.0, 1.0, 1.0> we[apostrophe]ve seen before. It represents the values for red, green, and blue. For now just know that <1.0, 1.0, 1.0> means [quotation mark]white[quotation mark] and <0.0, 0.0, 0.0> means [quotation mark]black[quotation mark]. Replace the llSay(0,[quotation mark]turning off![quotation mark]); with...[paragraph break]";
	say "[fixed letter spacing]llSetText([quotation mark]I am off[quotation mark], <0.0, 0.0, 0.0>,1.0);[variable letter spacing][paragraph break]";
	say "The 1.0 is the alpha setting. 1.0 means fully opaque, and 0.0 would be completely transparent (invisible)."

Part 5 - Intro Text

When play begins:
	say "[bold type]THE ROOM OF FIVE BUTTONS[roman type][line break]An Interactive Writing Portfolio[line break]by John Escobedo[paragraph break]Type [quotation mark]help[quotation mark] for a list of commands.[paragraph break]"
