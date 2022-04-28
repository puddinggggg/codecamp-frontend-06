import WriteUseditem from "../../../../src/components/units/useditem/write/write.container";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      # useditemAddress{
      #   _id
      # zipcode
      #   address
      #   addressDetail
      #   lat
      #   lng
      # }
    }
  }
`;
export default function UseditemEditPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.useditemId },
  });

  return <WriteUseditem isEdit={true} data={data} />;
}
