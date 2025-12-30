import pasteModel from "../models/paste.model.js";
import generatedId from "../utils/generatedID.js";

//create a new paste

export const createPaste = async (req, res, next) => {
  try {
    const { content, expiresInMinutes,maxViews } = req.body;

    //validation
    if (!content || content.trim() == "") {
      return res.status(400).json({ error: "content is required" });
    }
    let expiresAT = null;
    if (expiresInMinutes) {
      expiresAT = new Date(Date.now() + expiresInMinutes * 60 * 1000);
    }
    const paste = await pasteModel.create({
      pasteId: generatedId(),
      content,
      expiresAT,
      maxViews: maxViews || null,
    });
    const fullUrl = `${req.protocol}://${req.get("host")}/api/pastes/${paste.pasteId}`;
    return res.status(200).json({
      id: paste.pasteId,
      link: fullUrl,
    });
  } catch (error) {
    next(error);
  }
};

//view a paste
export const getPaste = async (req, res) => {
  try {
    const { id } = req.params;

    const paste = await pasteModel.findOne({ pasteId: id });

    //not found
    if (!paste) {
      return res.json(401).json({
        error: "paste not found or expired",
      });
    }
    //time-based expire

    if (paste.expiresAT && paste.expiresAT < new Date()) {
      await paste.deleteOne();
      return res.status(402).json({ error: "paste not found or expired" });
    }

    //view based expires
    if (paste.maxViews !== null && paste.views >= paste.maxViews) {
      await paste.deleteOne();
      return res.status(401).json({ error: "paste not found or expired" });
    }

    //increment
    paste.views += 1;
    await paste.save();

    return res.status(200).json({
      content: paste.content,
    });
  } catch (error) {
    next(error);
  }
};
