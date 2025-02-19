// Create a function called processApplicants which processes a queue of applicants and remove those who do not meet all the requirements.
// Requirements:
// yearsExperience >= 2
// techStack = needs to have at least React experience
// Make sure to implement FIFO (First-In, First-Out)

const Queue = require('../lib/Queue')

function processApplicants(queue) {
  // your code here
  let tempQueue = new Queue()
  let tempQueue2 = new Queue()

  while (!queue.isEmpty()) {
    let currentFirstElem = queue.dequeue()
    // if (currentFirstElem.yearsExperience >= 2 && currentFirstElem.techStack.includes("React")) {
    //   tempQueue.enqueue(currentFirstElem)
    // }
    if (currentFirstElem.yearsExperience >= 2 ) {
      tempQueue.enqueue(currentFirstElem)
    }
  }

  while (!tempQueue.isEmpty()){
    let currentFirstElem = tempQueue.dequeue()
    for (let i = 0; i < currentFirstElem.techStack.length; i ++) {
        if(currentFirstElem.techStack[i] === "React") {
          tempQueue2.enqueue(currentFirstElem)
        }
    }

  }

  while (!tempQueue2.isEmpty()){
    queue.enqueue(tempQueue2.dequeue())
  }
}

const applicants = new Queue()
applicants.enqueue({ name: "John Smith", yearsExperience: 3, techStack: ['Angular', 'Node'] })
applicants.enqueue({ name: "Jane Smith", yearsExperience: 5, techStack: ['Node', 'React', 'Vue'] })
applicants.enqueue({ name: "Joe Smith", yearsExperience: 1, techStack: ['React', 'Node'] })
applicants.enqueue({ name: "Jack Smith", yearsExperience: 2, techStack: ['Node', 'MongoDB', 'React'] })

processApplicants(applicants)
console.log(applicants.printQueue())
// Expected output:
// { name: "Jane Smith", yearsExperience: 5, techStack: ['Node', 'React', 'Vue'] }
// { name: "Jack Smith", yearsExperience: 2, techStack: ['Node', 'MongoDB', 'React'] }
