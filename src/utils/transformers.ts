export const convertTimeInMsToWords = (timestamp: number) => {
  const timeDiff = (Date.now() - timestamp) / 1000;

  if (timeDiff < 60) {
    return `${timeDiff.toFixed(0)} secs ago`;
  } else if (timeDiff < 3600) {
    let result = timeDiff / 60;
    return `${result.toFixed(0)} mins ago`;
  } else if (timeDiff < 86400) {
    let result = timeDiff / 3600;
    return `${result.toFixed(0)} hours ago`;
  }
  let result = timeDiff / 86400;
  return `${result.toFixed(0)} days ago`;
};

export const expressInThousands = (num: number): string => {
  let rem = num.toFixed(0).length % 3;
  let start = rem;
  let end = Math.floor(num.toFixed(0).length / 3);
  let result = num.toFixed(0).substring(0, rem);
  for (let i = 0; i < end; i++) {
    result = `${result}${rem > 0 || i > 0 ? "," : ""}${num
      .toFixed(0)
      .substring(start, start + 3)}`;
    start += 3;
  }
  return result;
};

export const expressThousandsInZeroGroup = (text: string): string => {
  const separatedTextArray = text.split(",");
  const zeroGroupTail = separatedTextArray.slice(1);

  let generatedText = "";

  switch (zeroGroupTail.length) {
    case 0:
      generatedText = "";
      break;
    case 1:
      generatedText = `,${zeroGroupTail[0]}`;
      break;
    case 2:
      generatedText = `.${zeroGroupTail[0]} M`;
      break;
    case 3:
      generatedText = `.${zeroGroupTail[0]} B`;
      break;
    case 4:
      generatedText = `.${zeroGroupTail[0]} T`;
      break;
    default:
      generatedText = `.${zeroGroupTail[0]} >> T`;
  }

  return `${separatedTextArray[0]}${generatedText}`;
};

export const expressDecimalsAsZeroGroup = (num: number, dp = 4): string => {
  let splitedByPoint = num.toFixed(dp).split(".");

  let refinedText = "";

  if (num > 1) {
    refinedText = expressThousandsInZeroGroup(
      expressInThousands(Number(splitedByPoint[0]))
    );

    if (num < 100_000) {
      refinedText = `${refinedText}.${splitedByPoint[1]}`;
    }
  } else {
    // num < 0: we'd work with the exponent
    refinedText = num.toPrecision(dp);
  }

  return refinedText;
};
