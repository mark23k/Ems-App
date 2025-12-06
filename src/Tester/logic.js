export const Grade = ({
    question1, question2, question3, question4, question5,
    question6, question7, question8, question9, question10,question11,question12,question13,question14,question15,question16,question17,question18,question19,question20,
    data
    }) => {

    let score = 0;

    if (question1 === data[0].correct) score += 10;
    if (question2 === data[1].correct) score += 10;
    if (question3 === data[2].correct) score += 10;
    if (question4 === data[3].correct) score += 10;
    if (question5 === data[4].correct) score += 10;
    if (question6 === data[5].correct) score += 10;
    if (question7 === data[6].correct) score += 10;
    if (question8 === data[7].correct) score += 10;
    if (question9 === data[8].correct) score += 10;
    if (question10 === data[9].correct) score += 10;
    if (question11 === data[10].correct) score += 10;
    if (question12 === data[11].correct) score += 10;
    if (question13 === data[12].correct) score += 10;
    if (question14 === data[13].correct) score += 10;
    if (question15 === data[14].correct) score += 10;
    if (question16 === data[15].correct) score += 10;
    if (question17 === data[16].correct) score += 10;
    if (question18 === data[17].correct) score += 10;
    if (question19 === data[18].correct) score += 10;
    if (question20 === data[19].correct) score += 10;

    

    if (score >= 70) {
        return `You Passed ${score}%`;
    } else {
        return `You Failed ${score}%`;
    }
};
