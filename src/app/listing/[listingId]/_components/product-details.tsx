import type { ReactElement } from 'react';
import { cn } from '@/lib/utils';
import formatDimension from '../_utils/formatDimensions';

const decimalFormatter = new Intl.NumberFormat('en-US', {
  style: 'decimal',
});

interface Props {
  itemAge: number | null;
  itemBrand: string | null;
  itemLength: number | null;
  mileage: number | null;
  pumpSize: number | null;
  tankSize: number | null;
  itemHeight: number | null;
  className?: string;
  hasServiceRecords: boolean | null;
  hasPumpTest: boolean | null;
}

export default function ProductDetails({
  itemAge,
  itemBrand,
  itemLength,
  itemHeight,
  mileage,
  pumpSize,
  tankSize,
  className,
  hasServiceRecords,
  hasPumpTest,
}: Props): ReactElement {
  let formattedMiles: string | null = null;
  if (mileage) {
    formattedMiles = decimalFormatter.format(mileage);
  }

  let formattedHeight: string | null = null;
  if (itemHeight) {
    formattedHeight = formatDimension(itemHeight);
  }

  let formattedLength: string | null = null;
  if (itemLength) {
    formattedLength = formatDimension(itemLength);
  }

  return (
    <div className={cn('py-6', className)}>
      <div className="grid grid-cols-2 gap-4">
        {itemAge && (
          <div className="flex items-start space-x-2 md:items-center md:space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="stroke-1.5 mt-1 h-5 w-5 flex-shrink-0 text-black md:mt-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
              ></path>
            </svg>
            <div className="flex flex-col items-start md:flex-row md:items-center md:space-x-2">
              <p className="undefined text-base/normal font-medium text-black">
                Model year
              </p>
              <p className="undefined text-base/normal font-light tracking-wide text-black">
                {itemAge}
              </p>
            </div>
          </div>
        )}
        {itemBrand && (
          <div className="flex items-start space-x-2 md:items-center md:space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="stroke-1.5 mt-1 h-5 w-5 flex-shrink-0 text-black md:mt-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
              ></path>
            </svg>
            <div className="flex flex-col items-start md:flex-row md:items-center md:space-x-2">
              <p className="undefined text-base/normal font-medium text-black">
                Make
              </p>
              <p className="undefined text-base/normal font-light tracking-wide text-black">
                {itemBrand}
              </p>
            </div>
          </div>
        )}
        {formattedLength && (
          <div className="flex items-start space-x-2 md:items-center md:space-x-4">
            <div className="stroke-1.5 mt-1 h-5 w-5 flex-shrink-0 text-black md:mt-0">
              <svg
                version="1.1"
                id="_x32_"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <path
                      className="st0"
                      d="M150.932,218.624c10.84,3.192,23.58,4.988,37.258,4.996c18.245-0.023,34.79-3.17,47.434-8.668 c6.318-2.771,11.72-6.126,15.866-10.39c4.108-4.204,7.071-9.718,7.064-15.939c0.007-6.222-2.956-11.742-7.064-15.94 c-6.237-6.362-15.216-10.825-26.048-14.062c-10.833-3.192-23.572-4.995-37.251-4.995c-18.244,0.014-34.79,3.162-47.441,8.668 c-6.318,2.771-11.72,6.125-15.865,10.389c-4.108,4.198-7.072,9.718-7.065,15.94c-0.007,6.221,2.956,11.734,7.065,15.939 C131.12,210.917,140.106,215.387,150.932,218.624z M135.754,183.213c3.303-3.495,10.249-7.404,19.464-10.079 c9.207-2.72,20.64-4.382,32.972-4.374c16.434-0.023,31.288,2.97,41.374,7.404c5.04,2.187,8.846,4.744,11.048,7.05 c2.246,2.357,2.8,4.05,2.808,5.41c-0.008,1.352-0.562,3.052-2.808,5.409c-3.296,3.488-10.242,7.404-19.457,10.079 c-9.207,2.72-20.632,4.375-32.965,4.375c-16.441,0.014-31.294-2.971-41.381-7.404c-5.04-2.188-8.846-4.744-11.054-7.05 c-2.246-2.357-2.794-4.057-2.801-5.409C132.96,187.263,133.508,185.57,135.754,183.213z"
                    ></path>
                    <path
                      className="st0"
                      d="M288.2,109.155c0.044,0.015,0.096,0.029,0.14,0.044l0.584,0.17L288.2,109.155z"
                    ></path>
                    <path
                      className="st0"
                      d="M88.172,402.845c-0.059-0.014-0.119-0.037-0.178-0.059l-0.732-0.214L88.172,402.845z"
                    ></path>
                    <path
                      className="st0"
                      d="M376.372,243.659v-55.037c0.008-8.114-1.929-15.888-5.224-22.922c-3.304-7.05-7.929-13.397-13.42-19.043 c-16.412-16.766-40.488-28.812-69.388-37.458l-0.155-0.044c-29.041-8.564-63.262-13.397-99.996-13.405 c-48.993,0.044-93.448,8.528-127.262,23.24l-0.015,0.008c-16.885,7.404-31.316,16.405-42.276,27.666 C13.154,152.303,8.528,158.65,5.225,165.7C1.929,172.735-0.008,180.509,0,188.623v134.756c-0.008,8.113,1.929,15.88,5.225,22.915 c3.303,7.05,7.929,13.397,13.412,19.043c16.413,16.766,40.472,28.812,69.358,37.45l0.192,0.059 c29.049,8.565,63.262,13.39,100.003,13.405H512v-172.59H376.372z M37.658,165.101c11.38-11.838,31.82-22.856,58.03-30.548 c26.204-7.737,58.119-12.326,92.502-12.319c45.838-0.022,87.308,8.18,116.659,21.031c14.676,6.399,26.27,13.966,33.866,21.836 c7.634,7.929,11.166,15.739,11.174,23.521c-0.008,7.773-3.54,15.592-11.174,23.521c-11.38,11.83-31.819,22.848-58.03,30.541 c-26.204,7.744-58.112,12.326-92.496,12.326c-45.845,0.015-87.314-8.187-116.666-21.031c-14.676-6.399-26.27-13.966-33.866-21.836 c-7.634-7.929-11.166-15.748-11.174-23.521C26.492,180.841,30.024,173.03,37.658,165.101z M349.888,222.341v32.669h-58.23 c6.746-2.202,13.256-4.552,19.249-7.168c15.954-6.983,29.145-15.348,38.684-25.176L349.888,222.341z M485.516,389.766h-45.402 v-66.854h-15.134v66.854h-33.416v-36.209h-15.134v36.209h-33.423v-66.854h-15.134v66.854h-33.423v-36.209h-15.134v36.209h-33.415 v-66.854h-15.134v66.854h-33.415v-36.209h-15.134v36.076c-11.491-0.177-22.657-0.857-33.423-2.01v-64.711h-15.134v62.76 c-23.772-3.621-45.054-9.459-62.138-16.937c-14.676-6.399-26.27-13.966-33.866-21.836c-7.634-7.93-11.166-15.748-11.174-23.521 V222.341l0.296,0.325c14.314,14.706,36.8,26.277,64.621,34.532c27.83,8.217,61.053,12.939,96.788,12.946h297.326V389.766z"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
            <div className="flex flex-col items-start md:flex-row md:items-center md:space-x-2">
              <p className="undefined text-base/normal font-medium text-black">
                Length
              </p>
              <p className="undefined text-base/normal font-light tracking-wide text-black">
                {formattedLength}
              </p>
            </div>
          </div>
        )}
        {formattedHeight && (
          <div className="flex items-start space-x-2 md:items-center md:space-x-4">
            <div className="stroke-1.5 mt-1 h-5 w-5 flex-shrink-0 text-black md:mt-0">
              <svg
                version="1.1"
                id="_x32_"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <path
                      className="st0"
                      d="M150.932,218.624c10.84,3.192,23.58,4.988,37.258,4.996c18.245-0.023,34.79-3.17,47.434-8.668 c6.318-2.771,11.72-6.126,15.866-10.39c4.108-4.204,7.071-9.718,7.064-15.939c0.007-6.222-2.956-11.742-7.064-15.94 c-6.237-6.362-15.216-10.825-26.048-14.062c-10.833-3.192-23.572-4.995-37.251-4.995c-18.244,0.014-34.79,3.162-47.441,8.668 c-6.318,2.771-11.72,6.125-15.865,10.389c-4.108,4.198-7.072,9.718-7.065,15.94c-0.007,6.221,2.956,11.734,7.065,15.939 C131.12,210.917,140.106,215.387,150.932,218.624z M135.754,183.213c3.303-3.495,10.249-7.404,19.464-10.079 c9.207-2.72,20.64-4.382,32.972-4.374c16.434-0.023,31.288,2.97,41.374,7.404c5.04,2.187,8.846,4.744,11.048,7.05 c2.246,2.357,2.8,4.05,2.808,5.41c-0.008,1.352-0.562,3.052-2.808,5.409c-3.296,3.488-10.242,7.404-19.457,10.079 c-9.207,2.72-20.632,4.375-32.965,4.375c-16.441,0.014-31.294-2.971-41.381-7.404c-5.04-2.188-8.846-4.744-11.054-7.05 c-2.246-2.357-2.794-4.057-2.801-5.409C132.96,187.263,133.508,185.57,135.754,183.213z"
                    ></path>
                    <path
                      className="st0"
                      d="M288.2,109.155c0.044,0.015,0.096,0.029,0.14,0.044l0.584,0.17L288.2,109.155z"
                    ></path>
                    <path
                      className="st0"
                      d="M88.172,402.845c-0.059-0.014-0.119-0.037-0.178-0.059l-0.732-0.214L88.172,402.845z"
                    ></path>
                    <path
                      className="st0"
                      d="M376.372,243.659v-55.037c0.008-8.114-1.929-15.888-5.224-22.922c-3.304-7.05-7.929-13.397-13.42-19.043 c-16.412-16.766-40.488-28.812-69.388-37.458l-0.155-0.044c-29.041-8.564-63.262-13.397-99.996-13.405 c-48.993,0.044-93.448,8.528-127.262,23.24l-0.015,0.008c-16.885,7.404-31.316,16.405-42.276,27.666 C13.154,152.303,8.528,158.65,5.225,165.7C1.929,172.735-0.008,180.509,0,188.623v134.756c-0.008,8.113,1.929,15.88,5.225,22.915 c3.303,7.05,7.929,13.397,13.412,19.043c16.413,16.766,40.472,28.812,69.358,37.45l0.192,0.059 c29.049,8.565,63.262,13.39,100.003,13.405H512v-172.59H376.372z M37.658,165.101c11.38-11.838,31.82-22.856,58.03-30.548 c26.204-7.737,58.119-12.326,92.502-12.319c45.838-0.022,87.308,8.18,116.659,21.031c14.676,6.399,26.27,13.966,33.866,21.836 c7.634,7.929,11.166,15.739,11.174,23.521c-0.008,7.773-3.54,15.592-11.174,23.521c-11.38,11.83-31.819,22.848-58.03,30.541 c-26.204,7.744-58.112,12.326-92.496,12.326c-45.845,0.015-87.314-8.187-116.666-21.031c-14.676-6.399-26.27-13.966-33.866-21.836 c-7.634-7.929-11.166-15.748-11.174-23.521C26.492,180.841,30.024,173.03,37.658,165.101z M349.888,222.341v32.669h-58.23 c6.746-2.202,13.256-4.552,19.249-7.168c15.954-6.983,29.145-15.348,38.684-25.176L349.888,222.341z M485.516,389.766h-45.402 v-66.854h-15.134v66.854h-33.416v-36.209h-15.134v36.209h-33.423v-66.854h-15.134v66.854h-33.423v-36.209h-15.134v36.209h-33.415 v-66.854h-15.134v66.854h-33.415v-36.209h-15.134v36.076c-11.491-0.177-22.657-0.857-33.423-2.01v-64.711h-15.134v62.76 c-23.772-3.621-45.054-9.459-62.138-16.937c-14.676-6.399-26.27-13.966-33.866-21.836c-7.634-7.93-11.166-15.748-11.174-23.521 V222.341l0.296,0.325c14.314,14.706,36.8,26.277,64.621,34.532c27.83,8.217,61.053,12.939,96.788,12.946h297.326V389.766z"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
            <div className="flex flex-col items-start md:flex-row md:items-center md:space-x-2">
              <p className="undefined text-base/normal font-medium text-black">
                Height
              </p>
              <p className="undefined text-base/normal font-light tracking-wide text-black">
                {formattedHeight}
              </p>
            </div>
          </div>
        )}
        {hasServiceRecords && (
          <div className="flex items-start space-x-2 md:items-center md:space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="stroke-1.5 mt-1 h-5 w-5 flex-shrink-0 text-black md:mt-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12"
              ></path>
            </svg>
            <div className="flex flex-col items-start md:flex-row md:items-center md:space-x-2">
              <p className="undefined text-base/normal font-medium text-black">
                Available
              </p>
              <p className="undefined text-base/normal font-light tracking-wide text-black">
                Service records
              </p>
            </div>
          </div>
        )}
        {hasPumpTest && (
          <div className="flex items-start space-x-2 md:items-center md:space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="stroke-1.5 mt-1 h-5 w-5 flex-shrink-0 text-black md:mt-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12"
              ></path>
            </svg>
            <div className="flex flex-col items-start md:flex-row md:items-center md:space-x-2">
              <p className="undefined text-base/normal font-medium text-black">
                Available
              </p>
              <p className="undefined text-base/normal font-light tracking-wide text-black">
                Pump test
              </p>
            </div>
          </div>
        )}
        {pumpSize && (
          <div className="flex items-start space-x-2 md:items-center md:space-x-4">
            <div className="stroke-1.5 mt-1 h-5 w-5 flex-shrink-0 text-black md:mt-0">
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <g>
                      <path d="M282.013,45.746h-131.7c-16.878,0-30.609,13.731-30.609,30.609v70.791c0,16.878,13.731,30.609,30.609,30.609h131.701 c16.877,0,30.609-13.731,30.609-30.609V76.355C312.622,59.476,298.892,45.746,282.013,45.746z M279.232,144.362h-0.001H153.096 V79.136h126.135V144.362z"></path>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M470.206,84.938l-26.7-52.333c-4.192-8.214-14.245-11.473-22.461-7.284c-8.213,4.191-11.474,14.246-7.284,22.459 l19.38,37.984c-29.415,9.491-50.759,37.119-50.759,69.651v54.592c0,9.221,7.475,16.696,16.696,16.696h39.56v55.929 c0,27.896-22.694,50.59-50.589,50.59h-27.101V41.021C360.949,18.402,342.548,0,319.93,0H123.064 c-28.5,0-51.687,23.186-51.687,51.686v378.941c-17.995,4.34-31.407,20.564-31.407,39.872v24.805 c0,9.221,7.475,16.696,16.696,16.696h318.996c9.221,0,16.696-7.475,16.696-16.696V470.5c0-19.308-13.413-35.532-31.408-39.872 v-64.013h27.101c46.308,0,83.98-37.674,83.98-83.982c0-0.16,0-190.107,0-190.107C472.031,89.887,471.405,87.287,470.206,84.938z M104.768,51.686c0-10.088,8.208-18.294,18.295-18.294H319.93c4.206,0,7.629,3.423,7.629,7.629v388.458h-222.79V51.686z M73.361,478.608V470.5c0-4.206,3.423-7.629,7.629-7.629h7.082h256.181h7.082c4.206,0,7.629,3.423,7.629,7.629v8.109H73.361z M438.639,193.312h-22.865v-37.896c0-15.889,9.365-29.625,22.865-35.996V193.312z"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div className="flex flex-col items-start md:flex-row md:items-center md:space-x-2">
              <p className="undefined text-base/normal font-medium text-black">
                Pump size
              </p>
              <p className="undefined text-base/normal font-light tracking-wide text-black">
                {pumpSize} GPM
              </p>
            </div>
          </div>
        )}
        {formattedMiles && (
          <div className="flex items-start space-x-2 md:items-center md:space-x-4">
            <div className="stroke-1.5 mt-1 h-5 w-5 flex-shrink-0 text-black md:mt-0">
              <svg
                version="1.1"
                id="_x32_"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <path
                      className="st0"
                      d="M255.996,74.939C114.838,74.939,0,189.784,0,330.942c0,19.646,2.24,39.233,6.667,58.228 c0.509,2.18,1.093,4.202,1.745,6.074c7.714,24.672,30.948,41.817,56.865,41.817h381.364c24.104,0,45.847-14.785,55-36.679 c1.108-2.18,2.03-4.599,2.734-7.296c0.27-1.026,0.689-2.741,1.318-5.528c4.179-18.478,6.307-37.54,6.307-56.617 C512,189.784,397.155,74.939,255.996,74.939z M475.763,380.811c-1.026,4.547-1.356,5.64-1.431,5.64l0.067-0.921 c-3.579,12.35-14.897,20.852-27.758,20.852H65.277c-12.831,0-24.119-8.456-27.729-20.77l0.21,1.416 c-0.045,0-0.33-1.026-1.214-4.816c-3.835-16.471-5.865-33.631-5.865-51.27c0-124.448,100.877-225.324,225.317-225.324 c124.44,0,225.324,100.876,225.324,225.324C481.321,348.08,479.396,364.767,475.763,380.811z"
                    ></path>
                    <path
                      className="st0"
                      d="M267.569,297.207c-3.633-1.244-7.52-1.955-11.572-1.955c-19.707,0-35.683,15.976-35.683,35.69 c0,19.706,15.976,35.682,35.683,35.682c18.036,0,32.912-13.392,35.308-30.769c0.225-1.618,0.374-3.243,0.374-4.913 C291.679,315.288,281.59,302.015,267.569,297.207z"
                    ></path>
                    <path
                      className="st0"
                      d="M399.716,194.787c-3.138-3.392-8.808-3.468-13.257-0.18l-123.594,91.004c2.696,0.412,5.378,1.049,8.014,1.955 c15.968,5.483,27.406,19.182,30.275,35.383l97.79-114.913C402.548,203.813,402.877,198.143,399.716,194.787z"
                    ></path>
                    <path
                      className="st0"
                      d="M340.402,182.908c5.543,3.214,12.628,1.303,15.834-4.239c3.206-5.551,1.303-12.636-4.239-15.849 c-5.543-3.19-12.644-1.288-15.849,4.247C332.956,172.624,334.844,179.717,340.402,182.908z"
                    ></path>
                    <path
                      className="st0"
                      d="M259.239,161.172c6.412,0,11.595-5.206,11.595-11.595c0-6.411-5.183-11.602-11.595-11.602 c-6.396,0-11.594,5.191-11.594,11.602C247.645,155.966,252.843,161.172,259.239,161.172z"
                    ></path>
                    <path
                      className="st0"
                      d="M76.175,320.898c-6.726,0-12.209,5.468-12.209,12.209s5.482,12.194,12.209,12.194 c6.741,0,12.194-5.453,12.194-12.194S82.916,320.898,76.175,320.898z"
                    ></path>
                    <path
                      className="st0"
                      d="M114.441,226.471c-5.542-3.206-12.643-1.289-15.849,4.254c-3.19,5.542-1.288,12.628,4.239,15.841 c5.558,3.206,12.658,1.296,15.864-4.247C121.886,236.776,119.984,229.677,114.441,226.471z"
                    ></path>
                    <path
                      className="st0"
                      d="M166.497,162.82c-5.558,3.213-7.445,10.298-4.239,15.849c3.191,5.542,10.291,7.453,15.834,4.239 c5.543-3.19,7.445-10.299,4.254-15.841C179.141,161.531,172.04,159.629,166.497,162.82z"
                    ></path>
                    <path
                      className="st0"
                      d="M404.038,226.471c-5.542,3.206-7.445,10.306-4.239,15.849c3.206,5.558,10.292,7.453,15.849,4.247 c5.542-3.213,7.445-10.299,4.239-15.841C416.696,225.182,409.595,223.265,404.038,226.471z"
                    ></path>
                    <path
                      className="st0"
                      d="M433.144,335.062c6.412,0,11.595-5.184,11.595-11.587c0-6.412-5.183-11.61-11.595-11.61 c-6.411,0-11.594,5.198-11.594,11.61C421.55,329.878,426.733,335.062,433.144,335.062z"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
            <div className="flex flex-col items-start md:flex-row md:items-center md:space-x-2">
              <p className="undefined text-base/normal font-medium text-black">
                Mileage
              </p>
              <p className="undefined text-base/normal font-light tracking-wide text-black">
                {formattedMiles} miles
              </p>
            </div>
          </div>
        )}
        {tankSize && (
          <div className="flex items-start space-x-2 md:items-center md:space-x-4">
            <div className="stroke-1.5 mt-1 h-5 w-5 flex-shrink-0 text-black md:mt-0">
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <g>
                      <path d="M488.145,313.528C502.896,292.445,512,260.125,512,222.609c0-66.626-28.71-116.87-66.783-116.87h-44.522V72.348h16.696 c9.22,0,16.696-7.475,16.696-16.696c0-9.22-7.475-16.696-16.696-16.696H217.043c-9.22,0-16.696,7.475-16.696,16.696 c0,9.22,7.475,16.696,16.696,16.696h16.696v33.391H66.783C28.71,105.739,0,155.983,0,222.609c0,37.516,9.104,69.837,23.855,90.919 C9.554,322.356,0,338.168,0,356.174c0,27.618,22.469,50.087,50.087,50.087h19.567c-1.853,5.226-2.872,10.842-2.872,16.696 c0,27.618,22.469,50.087,50.087,50.087c27.618,0,50.087-22.469,50.087-50.087c0-5.854-1.018-11.47-2.872-16.696h183.83 c-1.853,5.226-2.872,10.842-2.872,16.696c0,27.618,22.469,50.087,50.087,50.087c27.618,0,50.087-22.469,50.087-50.087 c0-5.854-1.018-11.47-2.872-16.696h19.567c27.618,0,50.087-22.469,50.087-50.087C512,338.168,502.446,322.356,488.145,313.528z M267.13,72.348h100.174v33.391H267.13V72.348z M166.957,139.13h66.783v33.391h-66.783V139.13z M166.957,205.913h66.783v33.391 h-66.783V205.913z M166.957,272.696h66.783v33.391h-66.783V272.696z M66.783,139.13h66.783v50.087V256v50.087H66.783 c-13.615,0-33.391-32.52-33.391-83.478S53.168,139.13,66.783,139.13z M116.87,439.652c-9.206,0-16.696-7.49-16.696-16.696 c0-9.206,7.49-16.696,16.696-16.696s16.696,7.49,16.696,16.696C133.565,432.162,126.076,439.652,116.87,439.652z M395.13,439.652 c-9.206,0-16.696-7.49-16.696-16.696c0-9.206,7.49-16.696,16.696-16.696s16.696,7.49,16.696,16.696 C411.826,432.162,404.336,439.652,395.13,439.652z M461.913,372.87H50.087c-9.206,0-16.696-7.49-16.696-16.696 c0-9.206,7.49-16.696,16.696-16.696h411.826c9.206,0,16.696,7.49,16.696,16.696C478.609,365.38,471.119,372.87,461.913,372.87z M445.217,306.087H267.13V256v-66.783V139.13H384h61.217c13.615,0,33.391,32.52,33.391,83.478S458.832,306.087,445.217,306.087z"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div className="flex flex-col items-start md:flex-row md:items-center md:space-x-2">
              <p className="undefined text-base/normal font-medium text-black">
                Tank size
              </p>
              <p className="undefined text-base/normal font-light tracking-wide text-black">
                {tankSize} gal
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
