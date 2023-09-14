export const defaultGraph = {
  "last_node_id": 40,
  "last_link_id": 69,
  "nodes": [
    {
      "id": 4,
      "type": "CLIPSetLastLayer",
      "pos": [
        439,
        172
      ],
      "size": {
        "0": 315,
        "1": 58
      },
      "flags": {},
      "order": 9,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 1
        }
      ],
      "outputs": [
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            2,
            3
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPSetLastLayer"
      },
      "widgets_values": [
        -2
      ]
    },
    {
      "id": 3,
      "type": "CLIPTextEncode",
      "pos": [
        916,
        8
      ],
      "size": {
        "0": 377.7811279296875,
        "1": 124.52955627441406
      },
      "flags": {},
      "order": 11,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 2
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            30
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "1 little girl, solo, jumping and posing, smiling, blue hoodie, black half pants, short blonde hair, white background"
      ],
      "color": "#232",
      "bgcolor": "#353"
    },
    {
      "id": 6,
      "type": "CLIPTextEncode",
      "pos": [
        907,
        184
      ],
      "size": {
        "0": 391.23883056640625,
        "1": 78.14339447021484
      },
      "flags": {},
      "order": 12,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 3
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            31
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "(worst quality, low quality: 1.4)"
      ],
      "color": "#322",
      "bgcolor": "#533"
    },
    {
      "id": 5,
      "type": "PrimitiveNode",
      "pos": [
        1820,
        300
      ],
      "size": {
        "0": 285.6000061035156,
        "1": 82
      },
      "flags": {},
      "order": 0,
      "mode": 0,
      "outputs": [
        {
          "name": "INT",
          "type": "INT",
          "links": [
            6,
            69
          ],
          "slot_index": 0,
          "widget": {
            "name": "seed",
            "config": [
              "INT",
              {
                "default": 0,
                "min": 0,
                "max": 18446744073709552000
              }
            ]
          }
        }
      ],
      "title": "Primitive (I'm using this as seed)",
      "properties": {},
      "widgets_values": [
        44444444,
        "fixed"
      ],
      "color": "#2a363b",
      "bgcolor": "#3f5159"
    },
    {
      "id": 20,
      "type": "ControlNetLoaderAdvanced",
      "pos": [
        536,
        -849
      ],
      "size": {
        "0": 367.79998779296875,
        "1": 58
      },
      "flags": {},
      "order": 1,
      "mode": 0,
      "inputs": [
        {
          "name": "timestep_keyframe",
          "type": "TIMESTEP_KEYFRAME",
          "link": null
        }
      ],
      "outputs": [
        {
          "name": "CONTROL_NET",
          "type": "CONTROL_NET",
          "links": [
            28
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "ControlNetLoaderAdvanced"
      },
      "widgets_values": [
        "control_v11p_sd15_openpose_fp16.safetensors"
      ],
      "color": "#323",
      "bgcolor": "#535"
    },
    {
      "id": 24,
      "type": "ControlNetApplyAdvanced",
      "pos": [
        1088,
        -508
      ],
      "size": {
        "0": 315,
        "1": 166
      },
      "flags": {},
      "order": 13,
      "mode": 0,
      "inputs": [
        {
          "name": "positive",
          "type": "CONDITIONING",
          "link": 30
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": 31
        },
        {
          "name": "control_net",
          "type": "CONTROL_NET",
          "link": 28
        },
        {
          "name": "image",
          "type": "IMAGE",
          "link": 41
        }
      ],
      "outputs": [
        {
          "name": "positive",
          "type": "CONDITIONING",
          "links": [
            56
          ],
          "shape": 3,
          "slot_index": 0
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "links": [
            58
          ],
          "shape": 3,
          "slot_index": 1
        }
      ],
      "properties": {
        "Node name for S&R": "ControlNetApplyAdvanced"
      },
      "widgets_values": [
        1,
        0,
        1
      ],
      "color": "#323",
      "bgcolor": "#535"
    },
    {
      "id": 8,
      "type": "AnimateDiffLoaderV1",
      "pos": [
        934,
        -208
      ],
      "size": {
        "0": 315,
        "1": 150
      },
      "flags": {},
      "order": 10,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 7
        },
        {
          "name": "latents",
          "type": "LATENT",
          "link": 8
        }
      ],
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            12,
            66
          ],
          "shape": 3,
          "slot_index": 0
        },
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            11
          ],
          "shape": 3,
          "slot_index": 1
        }
      ],
      "properties": {
        "Node name for S&R": "AnimateDiffLoaderV1"
      },
      "widgets_values": [
        "mm_sd_v15.ckpt",
        1,
        true,
        false
      ],
      "color": "#432",
      "bgcolor": "#653"
    },
    {
      "id": 35,
      "type": "ControlNetApplyAdvanced",
      "pos": [
        1592,
        -508
      ],
      "size": {
        "0": 315,
        "1": 166
      },
      "flags": {},
      "order": 14,
      "mode": 0,
      "inputs": [
        {
          "name": "positive",
          "type": "CONDITIONING",
          "link": 56
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": 58
        },
        {
          "name": "control_net",
          "type": "CONTROL_NET",
          "link": 60
        },
        {
          "name": "image",
          "type": "IMAGE",
          "link": 61
        }
      ],
      "outputs": [
        {
          "name": "positive",
          "type": "CONDITIONING",
          "links": [
            57,
            67
          ],
          "shape": 3,
          "slot_index": 0
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "links": [
            59,
            68
          ],
          "shape": 3,
          "slot_index": 1
        }
      ],
      "properties": {
        "Node name for S&R": "ControlNetApplyAdvanced"
      },
      "widgets_values": [
        0.7,
        0,
        1
      ],
      "color": "#323",
      "bgcolor": "#535"
    },
    {
      "id": 9,
      "type": "EmptyLatentImage",
      "pos": [
        276.6621562050786,
        -76.45687833105465
      ],
      "size": {
        "0": 315,
        "1": 106
      },
      "flags": {},
      "order": 8,
      "mode": 0,
      "inputs": [
        {
          "name": "batch_size",
          "type": "INT",
          "link": 39,
          "widget": {
            "name": "batch_size",
            "config": [
              "INT",
              {
                "default": 1,
                "min": 1,
                "max": 64
              }
            ]
          }
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            8
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "EmptyLatentImage"
      },
      "widgets_values": [
        512,
        768,
        16
      ]
    },
    {
      "id": 40,
      "type": "VAEDecode",
      "pos": [
        2979,
        -94
      ],
      "size": {
        "0": 210,
        "1": 46
      },
      "flags": {},
      "order": 20,
      "mode": 0,
      "inputs": [
        {
          "name": "samples",
          "type": "LATENT",
          "link": 65
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 64,
          "slot_index": 1
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            63
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "VAEDecode"
      }
    },
    {
      "id": 7,
      "type": "KSampler",
      "pos": [
        2353,
        -378
      ],
      "size": {
        "0": 315,
        "1": 262
      },
      "flags": {},
      "order": 15,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 12
        },
        {
          "name": "positive",
          "type": "CONDITIONING",
          "link": 57
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": 59,
          "slot_index": 2
        },
        {
          "name": "latent_image",
          "type": "LATENT",
          "link": 11
        },
        {
          "name": "seed",
          "type": "INT",
          "link": 6,
          "widget": {
            "name": "seed",
            "config": [
              "INT",
              {
                "default": 0,
                "min": 0,
                "max": 18446744073709552000
              }
            ]
          }
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            9,
            42
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "KSampler"
      },
      "widgets_values": [
        44444444,
        "fixed",
        20,
        8,
        "euler",
        "normal",
        1
      ]
    },
    {
      "id": 2,
      "type": "VAELoader",
      "pos": [
        2012,
        -580
      ],
      "size": {
        "0": 385.8948669433594,
        "1": 58
      },
      "flags": {},
      "order": 2,
      "mode": 0,
      "outputs": [
        {
          "name": "VAE",
          "type": "VAE",
          "links": [
            10,
            64
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "VAELoader"
      },
      "widgets_values": [
        "kl-f8-anime2.ckpt"
      ]
    },
    {
      "id": 28,
      "type": "LatentUpscaleBy",
      "pos": [
        2538,
        -41
      ],
      "size": {
        "0": 315,
        "1": 82
      },
      "flags": {},
      "order": 17,
      "mode": 0,
      "inputs": [
        {
          "name": "samples",
          "type": "LATENT",
          "link": 42
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            62
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "LatentUpscaleBy"
      },
      "widgets_values": [
        "nearest-exact",
        1.5
      ]
    },
    {
      "id": 38,
      "type": "KSampler",
      "pos": [
        2664,
        117
      ],
      "size": {
        "0": 315,
        "1": 262
      },
      "flags": {},
      "order": 19,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 66,
          "slot_index": 0
        },
        {
          "name": "positive",
          "type": "CONDITIONING",
          "link": 67,
          "slot_index": 1
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": 68,
          "slot_index": 2
        },
        {
          "name": "latent_image",
          "type": "LATENT",
          "link": 62
        },
        {
          "name": "seed",
          "type": "INT",
          "link": 69,
          "widget": {
            "name": "seed",
            "config": [
              "INT",
              {
                "default": 0,
                "min": 0,
                "max": 18446744073709552000
              }
            ]
          },
          "slot_index": 4
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            65
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "KSampler"
      },
      "widgets_values": [
        44444444,
        "fixed",
        20,
        8,
        "euler",
        "normal",
        0.65
      ]
    },
    {
      "id": 10,
      "type": "VAEDecode",
      "pos": [
        2543,
        -592
      ],
      "size": {
        "0": 210,
        "1": 46
      },
      "flags": {},
      "order": 16,
      "mode": 0,
      "inputs": [
        {
          "name": "samples",
          "type": "LATENT",
          "link": 9
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 10
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            13
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "VAEDecode"
      }
    },
    {
      "id": 11,
      "type": "AnimateDiffCombine",
      "pos": [
        2856,
        -524
      ],
      "size": {
        "0": 315,
        "1": 342
      },
      "flags": {},
      "order": 18,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 13
        }
      ],
      "properties": {
        "Node name for S&R": "AnimateDiffCombine"
      },
      "widgets_values": [
        8,
        0,
        "Enabled",
        "AA_gif"
      ],
      "color": "#432",
      "bgcolor": "#653"
    },
    {
      "id": 39,
      "type": "AnimateDiffCombine",
      "pos": [
        3193,
        31
      ],
      "size": {
        "0": 315,
        "1": 342
      },
      "flags": {},
      "order": 21,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 63
        }
      ],
      "properties": {
        "Node name for S&R": "AnimateDiffCombine"
      },
      "widgets_values": [
        8,
        0,
        "Enabled",
        "AA_gif"
      ],
      "color": "#432",
      "bgcolor": "#653"
    },
    {
      "id": 33,
      "type": "AnimateDiffCombine",
      "pos": [
        134,
        -857
      ],
      "size": {
        "0": 315,
        "1": 342
      },
      "flags": {},
      "order": 7,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 53
        }
      ],
      "properties": {
        "Node name for S&R": "AnimateDiffCombine"
      },
      "widgets_values": [
        8,
        0,
        "Enabled",
        "AA_openpose_cn_gif"
      ],
      "color": "#432",
      "bgcolor": "#653"
    },
    {
      "id": 36,
      "type": "ControlNetLoaderAdvanced",
      "pos": [
        1145,
        -835
      ],
      "size": {
        "0": 367.79998779296875,
        "1": 58
      },
      "flags": {},
      "order": 5,
      "mode": 0,
      "inputs": [
        {
          "name": "timestep_keyframe",
          "type": "TIMESTEP_KEYFRAME",
          "link": null
        }
      ],
      "outputs": [
        {
          "name": "CONTROL_NET",
          "type": "CONTROL_NET",
          "links": [
            60
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "ControlNetLoaderAdvanced"
      },
      "widgets_values": [
        "control_v11p_sd15_lineart_fp16.safetensors"
      ],
      "color": "#323",
      "bgcolor": "#535"
    },
    {
      "id": 1,
      "type": "CheckpointLoaderSimpleWithNoiseSelect",
      "pos": [
        64,
        142
      ],
      "size": {
        "0": 315,
        "1": 122
      },
      "flags": {},
      "order": 6,
      "mode": 0,
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            7
          ],
          "shape": 3,
          "slot_index": 0
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            1
          ],
          "shape": 3,
          "slot_index": 1
        },
        {
          "name": "VAE",
          "type": "VAE",
          "links": null,
          "shape": 3
        }
      ],
      "properties": {
        "Node name for S&R": "CheckpointLoaderSimpleWithNoiseSelect"
      },
      "widgets_values": [
        "Counterfeit-V3.0_fp32.safetensors",
        "sqrt_linear (AnimateDiff)"
      ],
      "color": "#432",
      "bgcolor": "#653"
    },
    {
      "id": 37,
      "type": "LoadImagesFromDirectory",
      "pos": [
        1151,
        -698
      ],
      "size": {
        "0": 315,
        "1": 122
      },
      "flags": {},
      "order": 4,
      "mode": 0,
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            61
          ],
          "shape": 3,
          "slot_index": 0
        },
        {
          "name": "MASK",
          "type": "MASK",
          "links": null,
          "shape": 3
        },
        {
          "name": "INT",
          "type": "INT",
          "links": [],
          "shape": 3,
          "slot_index": 2
        }
      ],
      "properties": {
        "Node name for S&R": "LoadImagesFromDirectory"
      },
      "widgets_values": [
        "/content/ComfyUI/01_Lineart",
        24
      ],
      "color": "#323",
      "bgcolor": "#535"
    },
    {
      "id": 26,
      "type": "LoadImagesFromDirectory",
      "pos": [
        139.95125594326143,
        -352.43133875976577
      ],
      "size": {
        "0": 315,
        "1": 122
      },
      "flags": {},
      "order": 3,
      "mode": 0,
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            41,
            53
          ],
          "shape": 3,
          "slot_index": 0
        },
        {
          "name": "MASK",
          "type": "MASK",
          "links": null,
          "shape": 3
        },
        {
          "name": "INT",
          "type": "INT",
          "links": [
            39
          ],
          "shape": 3,
          "slot_index": 2
        }
      ],
      "properties": {
        "Node name for S&R": "LoadImagesFromDirectory"
      },
      "widgets_values": [
        "/content/ComfyUI/00_Openpose",
        24
      ],
      "color": "#323",
      "bgcolor": "#535"
    }
  ],
  "links": [
    [
      1,
      1,
      1,
      4,
      0,
      "CLIP"
    ],
    [
      2,
      4,
      0,
      3,
      0,
      "CLIP"
    ],
    [
      3,
      4,
      0,
      6,
      0,
      "CLIP"
    ],
    [
      6,
      5,
      0,
      7,
      4,
      "INT"
    ],
    [
      7,
      1,
      0,
      8,
      0,
      "MODEL"
    ],
    [
      8,
      9,
      0,
      8,
      1,
      "LATENT"
    ],
    [
      9,
      7,
      0,
      10,
      0,
      "LATENT"
    ],
    [
      10,
      2,
      0,
      10,
      1,
      "VAE"
    ],
    [
      11,
      8,
      1,
      7,
      3,
      "LATENT"
    ],
    [
      12,
      8,
      0,
      7,
      0,
      "MODEL"
    ],
    [
      13,
      10,
      0,
      11,
      0,
      "IMAGE"
    ],
    [
      28,
      20,
      0,
      24,
      2,
      "CONTROL_NET"
    ],
    [
      30,
      3,
      0,
      24,
      0,
      "CONDITIONING"
    ],
    [
      31,
      6,
      0,
      24,
      1,
      "CONDITIONING"
    ],
    [
      39,
      26,
      2,
      9,
      0,
      "INT"
    ],
    [
      41,
      26,
      0,
      24,
      3,
      "IMAGE"
    ],
    [
      42,
      7,
      0,
      28,
      0,
      "LATENT"
    ],
    [
      53,
      26,
      0,
      33,
      0,
      "IMAGE"
    ],
    [
      56,
      24,
      0,
      35,
      0,
      "CONDITIONING"
    ],
    [
      57,
      35,
      0,
      7,
      1,
      "CONDITIONING"
    ],
    [
      58,
      24,
      1,
      35,
      1,
      "CONDITIONING"
    ],
    [
      59,
      35,
      1,
      7,
      2,
      "CONDITIONING"
    ],
    [
      60,
      36,
      0,
      35,
      2,
      "CONTROL_NET"
    ],
    [
      61,
      37,
      0,
      35,
      3,
      "IMAGE"
    ],
    [
      62,
      28,
      0,
      38,
      3,
      "LATENT"
    ],
    [
      63,
      40,
      0,
      39,
      0,
      "IMAGE"
    ],
    [
      64,
      2,
      0,
      40,
      1,
      "VAE"
    ],
    [
      65,
      38,
      0,
      40,
      0,
      "LATENT"
    ],
    [
      66,
      8,
      0,
      38,
      0,
      "MODEL"
    ],
    [
      67,
      35,
      0,
      38,
      1,
      "CONDITIONING"
    ],
    [
      68,
      35,
      1,
      38,
      2,
      "CONDITIONING"
    ],
    [
      69,
      5,
      0,
      38,
      4,
      "INT"
    ]
  ],
  "groups": [
    {
      "title": "Change this to match your model reqs",
      "bounding": [
        414,
        101,
        416,
        165
      ],
      "color": "#3f789e"
    },
    {
      "title": "Animation length determined by Latents passed in",
      "bounding": [
        118,
        -141,
        550,
        191
      ],
      "color": "#3f789e"
    },
    {
      "title": "From adv-controlnet/image",
      "bounding": [
        114,
        -434,
        454,
        253
      ],
      "color": "#3f789e"
    }
  ],
  "config": {},
  "extra": {},
  "version": 0.4
};