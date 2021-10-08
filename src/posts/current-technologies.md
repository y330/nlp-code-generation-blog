---
title: Current Technology being used
date: 2021-10-07
excerpt: "Common tools include IntelliSense, KiteAI"
---

Currently, regular code suggestions are used to assist developers. Code suggestions allows the users to insert code snippets in a file via a Suggestion List. All you have to do is type a string of code and press tab. The IDE will insert the suggested code snippet in your file without disrupting your workflow or interrupting what you are doing. A tool that is commonly used to assist developers in this way is IntelliSense.

![intellisense demo](/img/intellisense.gif)

###### IntelliSense demo

Code Suggestions uses heuristics to recognize context, and the invariant symbol.

The key word "context" refers to the surrounding text in a file, and has been shown to be more effective than just looking at the first character of a line for determining whether or not a space was required.

![intellisense icons](/img/intellisense-symbols.png)

###### Different tokens in code

Other research from this group showed that having several related words can improve code suggestions' ability to understand context of code, especially if those words are used in the same context. Thus, they also implemented search of related words on their category list, which enhances results by increasing the likelihood that a user will find what they are looking for more quickly.

[Read the next post ⏭](future-impact)
