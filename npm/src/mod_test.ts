import * as dntShim from "./_dnt.test_shims.js";
import { assertEquals } from "./deps/deno.land/std@0.192.0/testing/asserts.js";
import { is42 } from "./mod.js";

dntShim.Deno.test("42 should return true", () => {
  assertEquals(true, is42(42));
});

dntShim.Deno.test("1 should return false", () => {
  assertEquals(false, is42(1));
});
