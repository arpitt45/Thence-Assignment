
import React, { useState } from 'react';

const AskQuestionContainer = () => {
  const [answers, setAnswers] = useState({});

  const toggleAnswer = (questionId) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: !prevAnswers[questionId]
    }));
  };

  return (
    <div style={{background:"#e8eee7", height:"40rem"}} className="ask-question-container  rounded-xl w-full flex justify-between ">
        <section>
        <span style={{color:"gray"}} className="shadow-font relative top-16 left-40 ">What's on your mind</span>   
        <div className="font-semibold text-5xl mx-1  relative top-20 left-40">
          <h1>Ask Questions</h1>
        </div>
        </section>
        

        <section>

        <div class="container relative mx-auto px-4 bottom-32">
  <div class="mx-auto max-w-3xl ">
    <div class="mb-24 text-center"></div>
    <div  class="pt-18 pb-18 rounded-4xl  px-4  sm:px-20 sm:pt-24 ">
      <button class="group mb-8 flex w-full items-start justify-between border-b border-gray-400 pb-8 text-left">
        <div class="max-w-xl pr-5">
          <h3 class="mb-3 text-lg font-semibold text-green-500">Do you offer freelancers?</h3>
          <p class="text-sm text-gray-500">Pretium ac auctor quis urna orci feugiat. Vulputate tellus velit tellus orci auctor vel nulla facilisi ut. </p>
        </div>
        <div class="pt-1">
          <span>
            <svg width="17" height="3" viewbox="0 0 17 3" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z" fill="#0bb127"></path>
            </svg>
          </span>
        </div>
      </button>
      <button class="group mb-8 flex w-full items-start justify-between border-b border-gray-400 pb-8 text-left">
        <div class="max-w-xl pr-5">
          <h3 class="text-lg font-semibold text-black group-hover:text-green-500">Do you provide a complete design style?</h3>
          <p class="mt-3 hidden text-sm text-gray-500 group-hover:block">Pretium ac auctor quis urna orci feugiat. Vulputate tellus velit tellus orci auctor vel nulla facilisi ut. Ante nunc risus viverra vivamus. Eros amet at lectus ac ac nibh dignissim.</p>
        </div>
        <div class="pt-1">
          <span class="hidden group-hover:block">
            <svg width="17" height="3" viewbox="0 0 17 3" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z" fill="#0bb127"></path>
            </svg>
          </span>
          <span class="block group-hover:hidden">
            <svg width="17" height="16" viewbox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.4619 7H9.46194V1C9.46194 0.734784 9.35659 0.48043 9.16905 0.292893C8.98151 0.105357 8.72716 0 8.46194 0C8.19673 0 7.94237 0.105357 7.75484 0.292893C7.5673 0.48043 7.46194 0.734784 7.46194 1V7H1.46194C1.19673 7 0.942374 7.10536 0.754838 7.29289C0.567302 7.48043 0.461945 7.73478 0.461945 8C0.461945 8.26522 0.567302 8.51957 0.754838 8.70711C0.942374 8.89464 1.19673 9 1.46194 9H7.46194V15C7.46194 15.2652 7.5673 15.5196 7.75484 15.7071C7.94237 15.8946 8.19673 16 8.46194 16C8.72716 16 8.98151 15.8946 9.16905 15.7071C9.35659 15.5196 9.46194 15.2652 9.46194 15V9H15.4619C15.7272 9 15.9815 8.89464 16.1691 8.70711C16.3566 8.51957 16.4619 8.26522 16.4619 8C16.4619 7.73478 16.3566 7.48043 16.1691 7.29289C15.9815 7.10536 15.7272 7 15.4619 7Z" fill="black"></path>
            </svg>
          </span>
        </div>
      </button>
      <button class="group mb-8 flex w-full items-start justify-between border-b border-gray-400 pb-8 text-left">
        <div class="max-w-xl pr-5">
          <h3 class="text-lg font-semibold text-black group-hover:text-green-500">How was the license?</h3>
          <p class="mt-3 hidden text-sm text-gray-500 group-hover:block">Pretium ac auctor quis urna orci feugiat. Vulputate tellus velit tellus orci auctor vel nulla facilisi ut. Ante nunc risus viverra vivamus. Eros amet at lectus ac ac nibh dignissim.</p>
        </div>
        <div class="pt-1">
          <span class="hidden group-hover:block">
            <svg width="17" height="3" viewbox="0 0 17 3" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z" fill="#0bb127"></path>
            </svg>
          </span>
          <span class="block group-hover:hidden">
            <svg width="17" height="16" viewbox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.4619 7H9.46194V1C9.46194 0.734784 9.35659 0.48043 9.16905 0.292893C8.98151 0.105357 8.72716 0 8.46194 0C8.19673 0 7.94237 0.105357 7.75484 0.292893C7.5673 0.48043 7.46194 0.734784 7.46194 1V7H1.46194C1.19673 7 0.942374 7.10536 0.754838 7.29289C0.567302 7.48043 0.461945 7.73478 0.461945 8C0.461945 8.26522 0.567302 8.51957 0.754838 8.70711C0.942374 8.89464 1.19673 9 1.46194 9H7.46194V15C7.46194 15.2652 7.5673 15.5196 7.75484 15.7071C7.94237 15.8946 8.19673 16 8.46194 16C8.72716 16 8.98151 15.8946 9.16905 15.7071C9.35659 15.5196 9.46194 15.2652 9.46194 15V9H15.4619C15.7272 9 15.9815 8.89464 16.1691 8.70711C16.3566 8.51957 16.4619 8.26522 16.4619 8C16.4619 7.73478 16.3566 7.48043 16.1691 7.29289C15.9815 7.10536 15.7272 7 15.4619 7Z" fill="black"></path>
            </svg>
          </span>
        </div>
      </button>
      <button class="group mb-8 flex w-full items-start justify-between border-b border-gray-400 pb-8 text-left">
        <div class="max-w-xl pr-5">
          <h3 class="text-lg font-semibold text-black group-hover:text-green-500">How was the license?</h3>
          <p class="mt-3 hidden text-sm text-gray-500 group-hover:block">Pretium ac auctor quis urna orci feugiat. Vulputate tellus velit tellus orci auctor vel nulla facilisi ut. Ante nunc risus viverra vivamus. Eros amet at lectus ac ac nibh dignissim.</p>
        </div>
        <div class="pt-1">
          <span class="hidden group-hover:block">
            <svg width="17" height="3" viewbox="0 0 17 3" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z" fill="#0bb127"></path>
            </svg>
          </span>
          <span class="block group-hover:hidden">
            <svg width="17" height="16" viewbox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.4619 7H9.46194V1C9.46194 0.734784 9.35659 0.48043 9.16905 0.292893C8.98151 0.105357 8.72716 0 8.46194 0C8.19673 0 7.94237 0.105357 7.75484 0.292893C7.5673 0.48043 7.46194 0.734784 7.46194 1V7H1.46194C1.19673 7 0.942374 7.10536 0.754838 7.29289C0.567302 7.48043 0.461945 7.73478 0.461945 8C0.461945 8.26522 0.567302 8.51957 0.754838 8.70711C0.942374 8.89464 1.19673 9 1.46194 9H7.46194V15C7.46194 15.2652 7.5673 15.5196 7.75484 15.7071C7.94237 15.8946 8.19673 16 8.46194 16C8.72716 16 8.98151 15.8946 9.16905 15.7071C9.35659 15.5196 9.46194 15.2652 9.46194 15V9H15.4619C15.7272 9 15.9815 8.89464 16.1691 8.70711C16.3566 8.51957 16.4619 8.26522 16.4619 8C16.4619 7.73478 16.3566 7.48043 16.1691 7.29289C15.9815 7.10536 15.7272 7 15.4619 7Z" fill="black"></path>
            </svg>
          </span>
        </div>
      </button>
      <button class="group mb-8 flex w-full items-start justify-between border-b border-gray-400 pb-8 text-left">
        <div class="max-w-xl pr-5">
          <h3 class="text-lg font-semibold text-black group-hover:text-green-500">How much we can buy this marvelous product?</h3>
          <p class="mt-3 hidden text-sm text-gray-500 group-hover:block">Pretium ac auctor quis urna orci feugiat. Vulputate tellus velit tellus orci auctor vel nulla facilisi ut. Ante nunc risus viverra vivamus. Eros amet at lectus ac ac nibh dignissim.</p>
        </div>
        <div class="pt-1">
          <span class="hidden group-hover:block">
            <svg width="17" height="3" viewbox="0 0 17 3" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z" fill="#0bb127"></path>
            </svg>
          </span>
          <span class="block group-hover:hidden">
            <svg width="17" height="16" viewbox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.4619 7H9.46194V1C9.46194 0.734784 9.35659 0.48043 9.16905 0.292893C8.98151 0.105357 8.72716 0 8.46194 0C8.19673 0 7.94237 0.105357 7.75484 0.292893C7.5673 0.48043 7.46194 0.734784 7.46194 1V7H1.46194C1.19673 7 0.942374 7.10536 0.754838 7.29289C0.567302 7.48043 0.461945 7.73478 0.461945 8C0.461945 8.26522 0.567302 8.51957 0.754838 8.70711C0.942374 8.89464 1.19673 9 1.46194 9H7.46194V15C7.46194 15.2652 7.5673 15.5196 7.75484 15.7071C7.94237 15.8946 8.19673 16 8.46194 16C8.72716 16 8.98151 15.8946 9.16905 15.7071C9.35659 15.5196 9.46194 15.2652 9.46194 15V9H15.4619C15.7272 9 15.9815 8.89464 16.1691 8.70711C16.3566 8.51957 16.4619 8.26522 16.4619 8C16.4619 7.73478 16.3566 7.48043 16.1691 7.29289C15.9815 7.10536 15.7272 7 15.4619 7Z" fill="black"></path>
            </svg>
          </span>
        </div>
      </button>
      
    </div>
  </div>
</div>

        </section>

 
      
    </div>
  );
};

export default AskQuestionContainer;
