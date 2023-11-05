import { useFetch } from '@hooks/useFetch';
import { endPoints } from '@services/api';
import { Chart } from '@common/Chart';

const productLimit = 60;
const productOffset = 60;

export default function Dashboard() {
  const products = useFetch(endPoints.products.getProducts(productLimit, productOffset));

  const categoryNames = products?.map((product) => product.category);
  const categoryCount = categoryNames?.map((category) => category.name);

  const countOccurences = (array) => array.reduce((prev, current) => ((prev[current] = ++prev[current] || 1), prev), {});

  const data = {
    datasets: [
      {
        label: 'Categories',
        data: countOccurences(categoryCount),
        borderWitdth: 2,
        backgroundColor: ['#ffbb11', '#c0c0c0', '#50AF95', '#f3ba2f', '#2a71d0'],
      },
    ],
  };

  return (
    <>
      <Chart className="mb-8 mt-2" chartData={data} />
    </>
  );
}
