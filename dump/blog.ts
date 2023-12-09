export const blog = {
  title: 'Interview: Can You Stop “forEach” in JavaScript?',
  subTitle: 'There are 3 ways to stop forEach in JavaScript',
  cover: '/hero-mobile.png',
  createdAt: 'November 14th, 2023',
  updatedAt: 'November 14th, 2023',
  content: [
    {
      type: 'p',
      content: 'Interviewer: Can you stop a forEach loop in JavaScript? This is a question I was once asked during an interview, and my initial response was, “No, I can’t do that.”'
    },
    {
      type: 'h2',
      content: 'Is my answer correct?'
    },
    {
      type: 'p',
      content: 'Unfortunately, my response led the interviewer to end the interview abruptly.'
    },
    {
      type: 'p',
      content: 'Frustrated with the outcome, I asked the interviewer, “Why? Is it actually possible to stop a forEach loop in JavaScript?”'
    },
    {
      type: 'p',
      content: 'Before the interviewer could answer, I took a moment to explain my understanding of why we couldn’t directly stop a forEach loop in JavaScript.'
    },
    {
      type: 'h2',
      content: 'Is my answer correct?'
    },
    {
      type: 'p',
      content: 'My friends, what numbers will be output by the following code?'
    },
    {
      type: 'p',
      content: 'Will it output just one number or more?'
    },
    {
      type: 'p',
      content: 'Yes, it will output ‘0’, ‘1’, ‘2’, ‘3’.'
    },
    {
      type: 'code',
      content: `const array = [ -3, -2, -1, 0, 1, 2, 3 ]

array.forEach((it) => {
  if (it >= 0) {
    console.log(it)
    return // or break
  }
})`
    },
  ]
}
