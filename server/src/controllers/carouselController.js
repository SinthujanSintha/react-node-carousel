import { SliderData } from "../slider_data/SliderImages.js";

export const getSlides = async (req, res) => {
  const { numberOfSlides } = req.params;
  try {
    const slicedImages = await SliderData.slice(0, numberOfSlides);
    res.status(200).json(slicedImages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

