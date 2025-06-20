import { NETWORKS } from "../../constants";
import { PgCommon } from "../../utils/pg";
import { createSetting } from "../create";

export const endpoint = createSetting({
  id: "connection.endpoint",
  name: "Endpoint",
  description: "RPC URL that lets you interact with a specific Solana cluster",
  values: NETWORKS.map((n) => ({ name: n.name, value: n.endpoint })),
  customValueValidator: PgCommon.isUrl,
});
