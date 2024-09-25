// import { Text } from "@radix-ui/themes";
// import React, { PropsWithChildren, ReactNode } from "react";

// interface Props {
//   children: ReactNode;
// }

// const ErrorMessage = ({ children }: PropsWithChildren) => {
//   if (!children) return null;
//   return (
//     <Text color="red" as="p">
//       {children}
//     </Text>
//   );
// };

// export default ErrorMessage;

import { Text } from "@radix-ui/themes";
import React, { PropsWithChildren } from "react";

const ErrorMessage = ({ children }: PropsWithChildren<{}>) => {
  if (!children) return null;
  return (
    <Text color="red" as="p">
      {children}
    </Text>
  );
};

export default ErrorMessage;
