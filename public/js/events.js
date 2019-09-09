var genODLetter = document.getElementById('gen-OD-letter')
var genODLetter2 = document.getElementById('gen-OD-letter2')
var ODErrorMessage = document.getElementById('od-error-message')
var ODSpinner = document.getElementById('od-spinner')

var events = {
    "scavenger-hunt": {
        "name": "Scavenger Hunt",
        "tag": "Let the game be ventured",
        "description": "The aim of the event is to debug a given code and find clues that are hidden within. Match these clues to solve the bigger puzzle. Trace down the stack, hunt bugs and lead your way to solve the ultimate puzzle through clues, all while debugging the code.",
        "rules": [
            "It is an individual event",
            "Only registered participants are allowed to participate in the event.",
            "There is only one round",
            "Panel decision will be final"
        ],
        "hasContacts": true,
        "contacts": [
            {
                "name": "Leelakrishna P T",
                "number": "+917904954759"
            },
            {
                "name": "Vignesh K",
                "number": "+919791674810"
            }
        ]
    },
    "papyrus": {
        "name": "Papyrus",
        "tag": "Redefine the possible",
        "description": "Paper Presentation. Present your paper on topics of concern to the specialized panel of judges. The best work that stands out takes the title.",
        "rules": [
            "The paper can be on any topic of concern under the Computer Science stream.",
            "Each team can consist of, maximum 2 members",
            "Team members should belong to the same college",
            "Only registered participants are allowed to participate in the event.",
            "Panel decision will be final"
        ],
        "unregistered": true,
        "whatToSend": "abstract",
        "hasContacts": true,
        "contacts": [
            {
                "name": "Sindhuja",
                "number": "+916379471694"
            },
            {
                "name": "Gowtham C",
                "number": "+919123531534"
            }
        ]
    },
    "quizzard": {
        "name": "Quizzard",
        "tag": "Quiz it, Conquer it!",
        "description": "Hands on the buzzer! Blaze through a series of technical quizzes to rise up the ranks. Can you beat the quiz master?",
        "rules": [
            "It is an individual event",
            "Only registered participants are allowed to participate in the event.",
            "Questions are provided on-spot",
            "The number of rounds will be dynamic, based on the participation.",
            "Panel decision will be final"
        ],
        "hasContacts": true,
        "contacts": [
            {
                "name": "Jayalakshmi",
                "number": "+918610142058"
            },
            {
                "name": "Arun Prasadh",
                "number": "+917338817854"
            }
        ]
    },
    "code-collision": {
        "name": "Code Collision",
        "tag": "Clash of the Coders",
        "description": "Coding Solos! The fastest and most efficient problem solver survives. Come brawl in this fast paced knockout to prove your algorithmic prowess!",
        "rules": [
            "It is an individual event",
            "Only registered participants are allowed to participate in the event.",
            "There will be a total of 3 rounds",
            "Every round is a knockout stage",
            "Panel decision will be final"
        ],
        "hasContacts": true,
        "contacts": [
            {
                "name": "Danish",
                "number": "+917989752236"
            },
            {
                "name": "Amrit",
                "number": "+916385141855"
            }
        ]
    },
    "developer-date": {
        "name": "Developer Date",
        "tag": "Bond over the Code",
        "description": "Coding Duos! Two participants are randomly paired and are given a problem to solve. The duo should take turns to code the solution. But the catch is they can't be together at the same time. As one person codes, the other person is isolated. Swaps occur at regular intervals and the first duo to solve the problem wins.",
        "rules": [
            "Participants take part as duos",
            "Duos are randomly assigned on-spot",
            "Only registered participants are allowed to participate in the event.",
            "There is only one round",
            "Panel decision will be final"
        ],
        "hasContacts": true,
        "contacts": [
            {
                "name": "Rushita",
                "number": "+919182677571"
            },
            {
                "name": "Saran Raj",
                "number": "+916383909320"
            }
        ]
    },
    "intel-inside": {
        "name": "Intel Inside",
        "tag": "Fastest Fingers First",
        "description": "Get your hands dirty in this hardware mode! Assemble a PC from scratch from isolated components and install the OS to prove your build. Fastest fingers first.",
        "rules": [
            "It is an individual event",
            "Participants have to assemble the PC and install the OS",
            "The OS installation time is not counted",
            "Only registered participants are allowed to participate in the event.",
            "There is only one round",
            "Panel decision will be final"
        ],
        "hasContacts": true,
        "contacts": [
            {
                "name": "Aanandakrishnan",
                "number": "+917826068437"
            },
            {
                "name": "Vignesh S",
                "number": "+919500130361"
            }
        ]
    },
    "focus": {
        "name": "Focus Photography",
        "tag": "Capture the exceptional",
        "description": "A picture is worth a thousand words. Is yours? Prove your photography skills in this 2 level contest. Pass through the online phase and join us on-spot for the final showdown.",
        "rules": [
            "Open Theme",
            "Only one submission per person",
            "No filter or editing to be done",
            "There will be a total of two rounds, with the second round happening on-spot.",
            "Submissions for the first online round closes on August 30",
            "Potential candidates will be selected based on various judging criteria by our special panel and the number of likes their entry gathers on our Instagram page.",
            "Panel decision will be final"
        ],
        "unregistered": true,
        "whatToSend": "photograph",
        "hasContacts": true,
        "contacts": [
            {
                "name": "Raj Niranjan",
                "number": "+919176424445"
            },
            {
                "name": "Subhapratha",
                "number": "+919094371334"
            }
        ]
    },
    "meme-fad": {
        "name": "Meme Fad",
        "tag": "Aahaan",
        "description": "Humor. Laughter. Internet. Memes are being a part of our daily dose of laughter and is a major stress buster. Meme Creators are taking over the Internet, with relatable and funny memes. Are you one such creator? Prove your skills through this online meme contest.",
        "rules": [
            "Open Theme",
            "Only one submission per person",
            "No vulgar, controversial or political memes",
            "Memes will be judged based on quality and creativity.",
            "Submissions shouldn't have any watermark",
            "Panel decision will be final"
        ],
        "unregistered": true,
        "whatToSend": "meme",
        "hasContacts": true,
        "contacts": [
            {
                "name": "Yuvaraj",
                "number": "+919514313832"
            },
            {
                "name": "Nathan",
                "number": "+919940124132"
            }
        ]
    },
    "gully-cricket": {
        "name": "Gully Cricket",
        "tag": "No run in the backside",
        "description": "And that’s a wicket! Come join us in this interesting fast paced street cricket tournament within our campus. Adapt to the crazy street rules and clear the fields.",
        "rules": [
            "Each team should consist of 6 members",
            "Teams can be formed on-spot",
            "There will a minimal joining fee to contest in the tournament, paid on-spot.",
            "Ground rules will be communicated on-spot",
            "Umpires decision will be final"
        ],
        "hasContacts": true,
        "contacts": [
            {
                "name": "Naveen V",
                "number": "+919080991494"
            },
            {
                "name": "Tamil Mani",
                "number": "+916374768965"
            }
        ]
    },
    "graphica": {
        "name": "Graphica",
        "tag": "The Mint of Creativity",
        "description": "You can't use up creativity. The more you use, the more you have. Put your creativity on test, in this graphic design competition. Make it simple, but significant.",
        "rules": [
            "It is an individual event",
            "The challenge is to create a poster on given theme, on-spot.",
            "You can bring your own systems",
            "Panel decision will be final"
        ],
        "hasContacts": true,
        "contacts": [
            {
                "name": "Prasad Niraj",
                "number": "+919514105041"
            },
            {
                "name": "Vijay Raghavan",
                "number": "+919566396997"
            }
        ]
    },
    "gizmo-mania": {
        "name": "Gizmo-Mania",
        "tag": "Pitch your Review",
        "description": "Product Reviews! Given a gadget, on-spot, take it over your hand and head and pitch a fully detailed review over the product. Review as a solo or together with a duo. The best product review takes the title.",
        "rules": [
            "Each team can consist of, maximum 2 members",
            "There is only one round",
            "Panel decision will be final"
        ],
        "hasContacts": true,
        "contacts": [
            {
                "name": "Shreya Sekhar",
                "number": "+919003167308"
            }
        ]
    },
    "surprise-event": {
        "name": "Surprise Event",
        "tag": "What's that?",
        "description": "Nothing to see here. It’s a surprise event dude! How did you think there is gonna be a description? We just have one word for you. Surprise.",
        "rules": [
            "There is only one rule",
            "You don't talk about the event, until it happens on-spot.",
            "This point, technically, makes it look like there are 3 rules, while there are truly none yet."
        ],
        "hasContacts": false
    },
    "rolling-sir": {
        "name": "Rolling Sir",
        "tag": "Lights, Camera, Action",
        "description": "A short film competition to find the best film crew in the town. Screen your short film at the event and stand a chance to be crowned the best.",
        "rules": [
            "Open Theme",
            "No restrictions on team size",
            "No vulgar, sensitive, controversial or political topics.",
            "Should not exceed 20 minutes in length",
            "There will be an entry fee of Rs.150 to be made on-spot",
            "Submission and screening is made on-spot",
            "Panel decision will be final"
        ],
        "hasContacts": true,
        "contacts": [
            {
                "name": "Jeswin",
                "number": "+917397424897"
            },
            {
                "name": "Varun",
                "number": "+919940372692"
            }
        ]
    },
    "tensorflow": {
        "name": "TensorFlow",
        "tag": "Machine Learning",
        "description": "Machine learning is the practice of helping software perform a task without explicit programming or rules. The workshop will introduce you to Machine Learning and teach you to to build and deploy Machine Learning models using an end-to-end platform like TensorFlow. You will also be provided with takeaway learning materials and a valid Certification.",
        "rules": [
            "A workshop fee of Rs.150 will be collected on-spot, before the start of the workshop.",
            "The workshop will begin at 10.00 AM",
            "The duration of the workshop will be two and a half hours.",
            "Atendees will have to bring an USB or any storage device to takeaway resources from the workshop."
        ],
        "hasContacts": true,
        "contacts": [
            {
                "name": "Balaraman M",
                "number": "+918056659383"
            },
            {
                "name": "Suryarajan S",
                "number": "+918122985883"
            }
        ]
    },
    "ethical-hacking": {
        "name": "Ethical Hacking",
        "tag": "0010001100100001",
        "description": "Ethical hacking refers to the act of locating weaknesses and vulnerabilities of computer and information systems by duplicating the intent and actions of malicious hackers. Ethical hacking is also known as penetration testing, intrusion testing, or red teaming. The workshop will get you started on Ethical Hacking, its different ways and the softwares required, all in a practical approach. You will also be provided with takeaway learning materials and a valid Certification.",
        "rules": [
            "A workshop fee of Rs.150 will be collected on-spot, before the start of the workshop.",
            "The workshop will begin at 10.00 AM",
            "The duration of the workshop will be two and a half hours.",
            "Atendees will have to bring an USB or any storage device to takeaway resources from the workshop."
        ],
        "hasContacts": true,
        "contacts": [
            {
                "name": "Rahul Raj",
                "number": "+917373566290"
            },
            {
                "name": "Goutham M",
                "number": "+917904834760"
            }
        ]
    },
    "lan-gaming": {
        "name": "LAN Gaming",
        "tag": "Gamers Unite!",
        "description": "Join the clan and play multiplayer games over the local network with your friends. There is a wide range of games available, including Couter Strike, PUBG, Fortnite, Apex Legends, Call of Duty, Need for Speed and much more.",
        "rules": [
            "Have as much fun as can!",
            "Make sure you finish with wins and smiles."
        ],
        "hasContacts": false
    },
    "retro-gaming": {
        "name": "Retro Gaming",
        "tag": "Arcade FTW",
        "description": "Throwback to the good ol' times! Play classic retro games with your friends such as Super Mario, Contra, Pac Man, Pong, Space Invaders, Street Fighter II, Tetris and much more.",
        "rules": [
            "Have as much fun as can",
            "Make sure you finish with wins and smiles."
        ],
        "hasContacts": false
    }
}

var registered_events = JSON.parse(localStorage.user).registered_events
var event_list = registered_events.map(event => (`<li>${events[event].name}</li>`))

document.getElementById('modal-body').innerHTML = `<input type="checkbox" id="papyrus">
<label for="papyrus">Papyrus</label><br />
<input type="checkbox" id="focus">
<label for="focus">Focus</label>
${event_list.join('')}`

genODLetter2.addEventListener('click', function (e) {
    document.getElementById('modal-close').click()
    genODLetter.style.display = 'none'
    ODSpinner.style.display = 'block'
    axios.post('/generateOD', {
        papyrus: document.getElementById('papyrus').checked,
        focus: document.getElementById('focus').checked
    })
        .then(function (response) {
            ODSpinner.style.display = 'none'
            ODErrorMessage.innerText = response.data.message
            ODErrorMessage.style.color = 'green'
            ODErrorMessage.style.display = 'block'
        })
        .catch(function (err) {
            if (err.response.data) {
                ODErrorMessage.innerText = err.response.data.message
            } else {
                ODErrorMessage.innerText = 'Something went wrong'
            }
            ODSpinner.style.display = 'none'
            ODErrorMessage.style.display = 'block'
            genODLetter.style.display = 'block'
        })
})