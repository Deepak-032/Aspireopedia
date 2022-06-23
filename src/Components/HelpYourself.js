import React from 'react'

function HelpYourself() {

    const data = [
        {
            i: "/image/authenticator.jpg",
            h: "Microsoft Phone Authenticator",
            p: "Sign in with a smart card to register, manage, or approve requests for phone authentication.",
            l: "https://phoneregistration.microsoft.com/"
        },
        {
            i: "/image/Azure_Sub.png",
            h: "Visual Studio Subscription",
            p: "Create, deploy, and manage innovative applications on your platform of choice. The most comprehensive set of tools and resources to speed up development, promote collaboration anywhere, and innovative on any platform—all while maximizing security and compliance.",
            l: "https://my.visualstudio.com/Benefits?wt.mc_id=o~msft~profile~devprogram_attach&workflowid=devprogram&mkt=en-us"
        },
        {
            i: "/image/viva.png",
            h: "Viva Learning",
            p: "Viva Learning is a centralized learning hub in Microsoft Teams that lets you seamlessly integrate learning and building skills into your day. In Viva Learning, you can discover, share, recommend, and learn from content libraries provided by both your organization and partners. You can do all of this without leaving Microsoft Team.",
            l: "https://aka.ms/learning"
        },
        {
            i: "/image/shuttle.jpg",
            h: "Shuttle Service",
            p: "IS YOUR DAY punctuated by traffic? Morning and evening, do you sit in your car on congested roadways, wondering if there's enough time to pick up shirts at the dry cleaners and grab something for dinner as the commute gets longer and your “me time” gets shorter?",
            l: "#"
        },
        {
            i: "/image/MS-Cafe.png",
            h: "MS-Cafe",
            p: "Your food is just a tap away! Easy food ordering for a delightful experience. An easy-to-use app that puts food counters at your cafeteria/food court just a tap away!",
            l: "https://play.google.com/store/search?q=MS-+cafe&c=apps"
        },
        {
            i: "/image/GlobeSmart.png",
            h: "GlobeSmart",
            p: "Checkout analytics-driven solutions that help bridge workation, and cultural differences.",
            l: "#"
        }
    ]

    return (
        <div className="help_yourself container mt-5">
            <h2 className="fw-bold"> Help Yourself</h2>
            <h6 className='text-success'>Some important links that you may want to go through.</h6>
            <div className="row mt-5">
                {
                    data.map(({ i, h, p, l }) => (
                        <div className="col-4 mb-4">
                            <div className="card">
                                <img src={i} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <a href={l} className="dec_none hover_underline_animation">
                                        <h5 className="card-title text-dark pb-1">{h}</h5>
                                    </a>
                                    <p className="card-text">{p.length > 120 ? p.substring(0, 120) + "..." : p}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default HelpYourself