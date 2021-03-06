class Tarot {
    constructor() {
        this.allTarotCards = []
        this.cardBackSideImage
        this.x = 702
        this.y = 337
        this.arithmeticExPosition = 310
        this.createCards()
        this.cardPicked
        this.width = 87 * 1.1
        this.height = 172 * 1.1
        this.openedCardWidth = 87 * 2.2
        this.openedCardHeight = 172 * 2.2
    }

    createCards() {
        for (let i = 0; i < 22; i++) {
            const card = new Card(this.cardBackSideImage, this.arithmeticExPosition)
            this.allTarotCards.push(card)
            this.arithmeticExPosition += 32.6
        }
    }

    preload() {
        this.allTarotCards.forEach((card) => {
            card.cardBackSideImage = loadImage('./images/card-backside.png')
        })

    }

    draw() {
        clear()

        this.allTarotCards.forEach(function (oneTarotCard) {
            oneTarotCard.draw()
        })
        if (this.cardPicked !== undefined) {
            image(this.cardPicked.src, this.x - (this.openedCardWidth - this.width) + 4, this.y - 173, this.openedCardWidth, this.openedCardHeight)
            document.querySelector('.containerTarotText').innerHTML = '<h2>' + this.cardPicked.title + '</h2><br><div class="container-text"><h3 class="tarot-text">' + this.cardPicked.text + '</h3></div>'
            mouseClicked = function () { }

        }
    }
}

