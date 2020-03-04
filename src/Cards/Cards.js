import React, {Component} from 'react';
import Card from './CardUI';
import img1 from '../assets/index.jpg';
import StackGrid from "react-stack-grid";
import sizeMe from 'react-sizeme';
import Data from './warningpic.js';

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state= {};
    }
    //ask about this
    create = () => {
        let Data = 
        [["i1.jpg","When you are being manipulated by someone you are being psychologically coerced into doing something you probably don’t really want to do.A person who is targeted by manipulators who play the victim often try to help the manipulator in order to stop feeling guilty", "You feel fear, obligation and guilt"],
        ["i2.jpg","A manipulative person might twist what you say and make it about them, hijack the conversation or make you feel like you’ve done something wrong when you’re not quite sure you have, according to Stines.", "You’re questioning yourself"],
        ["i3.jpg","Rather than violently forbidding you from contacting your friends or family, a controlling partner may just gently nudge you away from them. A controlling partner will] make you feel badly for having a life outside of the relationship.A few weeks or months of fixating on your new love can be normal and fun. But if your partner actively encourages you to break away from your friends, that's unhealthy.", "You Feel Guilty When You Spend Time With Your Friends"],
        ["i4.jpg","Though almost all partners occasionally criticize each other, when the criticism is constant and contains the implication that you're incapable of making good decisions on your own, that's a red flag. And whether you're talking about your job, your friends, or your wardrobe, the idea that your partner always knows better than you do is dangerous. Their comments are not really about improving your life — they're about undermining your ability to make decisions and take action on your own","Criticize Lots Of Small Things That You Do"],
        ["i5.jpg", "On occasion, serious couples who are recovering from an incident of infidelity will allow the cheated-on partner access to the other partner's texts and emails for a limited period of time as a form of accountability. But if this is not a deal that you have specifically worked out with your partner in this context (and hopefully with the help of a counselor), it isn't right.", "They Don't Trust You"],
        ["i6.png", "A healthy partner knows that they can't protect you from the messiness of life — they can just support you and stand by your side. If you've gotten yourself into a financial mess, a healthy partner might buy you financial advice books, help you find budgeting apps, encourage you to take a financial planning class, or offer to help you go through your backlog of unopened credit card bills while providing emotional support. But they won't take your bank password, handle your bills, and give you an allowance until you pay off your credit card debt. A healthy partner will offer every kind of support that they can conceive of, but knows that you have to deal with your own problems in the end.", "They Spend A Lot Of Time Talking About Protecting You"],
        ["i7.jpg", "Healthy, stable relationships have a sense of reciprocity built into them. It's inherent that you will look out for each other, and not bean-count every little time you do something to help the other out. If your partner always keeps tally of every last interaction within your relationship—whether to hold a grudge, demand a favor in return, or be patted on the back—it could very well be their way of having the upper hand. And it can be downright exhausting.", "An overactive scorecard"],
        ["i8.jpg","Controlling people may come on very strongly in the beginning with seemingly romantic gestures. But upon closer inspection, many of those gestures—extravagant gifts, expectations of serious commitment early on, taking you for luxurious meals or on adventurous outings, letting you have full use of their car or home when they're not there—can be used to control you. ","Creating a debt you're beholden to"],
        ["i9.png", "making you feel guilty for time you need on your own to recharge, or making you feel like you don't love them enough when you perhaps need less time with them than they need with you. It is natural that two partners may not automatically have the exact same needs in terms of alone time, even if they are both extroverts (or introverts). In healthy relationships, communication about those needs leads to a workable compromise. In controlling ones, the person needing the alone time is made out to be a villain or denied the time altogether, taking away yet another way they can strengthen themselves.", "Not respecting Your Need For Time Alone"],
        ["i10.jpg", "When their partner is more passive and the controlling person is likely to triumph in every disagreement that comes up, just because the partner being controlled is more conflict-avoidant in nature or simply exhausted from the fighting that they've done. ", "Getting you so tired of arguing that you'll relent."],
        ["i11.jpg", "Maybe it's your faith or your politics. Maybe it's cultural traditions or your view of human nature. It's great when our partners can challenge us in interesting discussions and give us new ways of looking at the world. It is not great when they make you feel small, silly, or stupid, or they consistently try to change your mind about something important to you that you believe in.", "Making you feel belittled for long-held beliefs"],
        ["i12.jpg", "Humor and even teasing can be a fundamental mode of interacting within many long-term relationships. The key aspect is whether it feels comfortable and loving to both parties. In many controlling relationships, emotional abuse can be thinly veiled as \"I was just playing with you; you shouldn't take it personally.\" ", "Teasing or Ridicule That Has an Uncomfortable Undercurrent"],
        ["i13.png", "You may notice that you are constantly interrupted, or that opinions you express are quickly dismissed or were never acknowledged in the first place. Perhaps the conversation is always so overwhelmingly dominated by your partner that you can't remember the last time they asked you a meaningful question about how you were doing and actually listened to the answer.", "Inability or unwillingness to ever hear your point of view"],
        ["i14.png", "Even if a manipulative person is in the wrong, they will never want to show it. They will normally do what they can to make it seem like they are right and rationalize their behavior. This way, no matter what arguments you give back to them, they will always be right and will always rationalize their behavior to themselves.", " They Will Never Accept The Blame"],
        ["i15.png", "If a manipulator is out of arguments, they might try to provoke you as a last resort. They might say things that would make a normal person question a manipulator’s sanity or do anything to trigger negative emotions and make you angry. The purpose of this is to involve you in a pointless quarrel and make you say something that the manipulator can use in their defense. Tell them that what they’re saying makes no sense — you’re guaranteed to see a tragedy no worse than a Shakespeare play. If you spot this behavior, it’s essential that you stay calm and don’t give in to provocations. Just try to bring the conversation back to the topic. But if your partner goes on behaving this way, it’s better to end the conversation politely.", "They provoke"]
       ]
       

        // console.log(Data.length);
        let ele = [];
        for (let i = 0; i < Data.length; i++) {
            ele.push(//+ Data[i][0]
                <Card key={Data[i][0]} imgsrc={Data[i][0]} comment={Data[i][1]} sign={Data[i][2]}/>
            )
        }
        return ele;
    }

    render() {
        // let res = this.create();
        const { 
            size: { 
              width
            } 
        } = this.props;

        return(
            <div>
            <h1 className = 'home_header'>Signs of Manipulation</h1>
            <StackGrid columnWidth={width <= 500 ? '50%' : '33.33%'}  gutterWidth={6.5} gutterHeight={width <= 500 ? 6:10}>
                {this.create()}
            </StackGrid>
            </div>
        );
    }
}

export default sizeMe()(Cards);