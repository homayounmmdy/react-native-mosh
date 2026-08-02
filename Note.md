# What is the React Native ?

A framework for building native apps using **JavaScript**

instead of building two separate app for Android and iOS you can build one with javascript and share across both the big companies are using are

- Facebook
- Instagram
- Pinterest
- Skype
- Uber Eats
- and more

## Expo

for building app there is two way

- React Native CLI
- Expo CLI

## Align Item VS Align Content

**Align Items** = positions **individual items** on the cross axis. Always works.  
**Align Content** = distributes **multiple flex lines** on the cross axis. Only works with `flex-wrap: wrap` and multiple rows/columns. No wrap = no effect.

## Flex Basis , Flex grow , Flex Shrink

**Flex-basis** = starting size of an item before space is distributed (like `width` but for flex).  
**Flex-grow** = how much an item **expands** to fill extra space (0 = no grow, 1+ = proportional).  
**Flex-shrink** = how much an item **shrinks** when space is tight (1 = shrinks, 0 = doesn't).


**Short summary:**

- **Basis** = default size.
- **Grow** = ability to take extra space.
- **Shrink** = ability to give up space when needed.

> Together they define: *"Start at basis, then grow or shrink as needed."*